import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import moment from "moment";
import { DateTime } from 'luxon';
import { Storage } from "@google-cloud/storage";
import Database from "@ioc:Adonis/Lucid/Database";
import RadicadoDetail from "App/Models/RadicadoDetail";
import { ApiResponse } from "App/Utils/ApiResponses";
import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import { v4 as uuidv4 } from "uuid";
// const { differenceInHours, addDays, isWeekend, parseISO, format } = require('date-fns');
import { format, parseISO, isWeekend, addHours, isBefore, isAfter, addDays, differenceInMinutes, differenceInHours, min, startOfDay, setHours, setMinutes, getHours } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

export default class RadicadoDetailsController {
  constructor() {}

  public async index({ response }: HttpContextContract) {
    const radicadoDetailsList = await RadicadoDetail.query().preload(
      "rn_radicado_details_to_related_answer"
    );

    return response.status(200).send(radicadoDetailsList);
  }

  // public async store({ response }: HttpContextContract) {
  //   // const payload = await request.validate({
  //   //   schema: RadicadoDetailValidator
  //   // })
  //   return response.status(200).json({
  //     message: "Radicado store",
  //   });
  // }

  public async show({ request, response }: HttpContextContract) {
    const { id } = request.params();
    try {
      const RadicadoDetails = await RadicadoDetail.findByOrFail(
        "DRA_RADICADO",
        id
      );
      return response.status(200).json({
        data: RadicadoDetails,
        message: { success: "Radicado Encontrado" },
      });
    } catch (err) {
      return response
        .status(200)
        .json({ data: null, message: { error: "Radicado no Encontrado" } });
    }
  }

  public async searchByRecipient({ request, response }: HttpContextContract) {
    const id = request.input("id-destinatario");
    const role = request.input("role");
    const days = request.input("dias");
    const start = request.input("desde");
    const end = request.input("hasta");

    try {


      const query = Database.from("radicado_details as rd")
        .select(
          "rd.DRA_RADICADO",
          "rd.DRA_TIPO_DOCUMENTO_RADICADO",
          "rd.DRA_FECHA_RADICADO",
          "rd.DRA_FECHA_EVACUACION_ENTRADA",
          "rd.DRA_FECHA_EVACUACION_SALIDA",
          "rd.DRA_REFERENCIA",
          "rd.DRA_RADICADO_ORIGEN",
          "rd.DRA_PRIORIDAD",
          Database.raw(`
          CASE
            WHEN ent1.ENT_TIPO_DOCUMENTO = 'NIT' THEN ent1.ENT_RAZON_SOCIAL
            ELSE CONCAT(ent1.ENT_NOMBRES, ' ', ent1.ENT_APELLIDOS)
          END as NombresORazonSocial_DestinatarioOriginal
        `),
          Database.raw(`
          CASE
            WHEN ent2.ENT_TIPO_DOCUMENTO = 'NIT' THEN ent2.ENT_RAZON_SOCIAL
            ELSE CONCAT(ent2.ENT_NOMBRES, ' ', ent2.ENT_APELLIDOS)
          END as NombresORazonSocial_DestinatarioCopia
        `),
          Database.raw(`
          CASE
            WHEN ent3.ENT_TIPO_DOCUMENTO = 'NIT' THEN ent3.ENT_RAZON_SOCIAL
            ELSE CONCAT(ent3.ENT_NOMBRES, ' ', ent3.ENT_APELLIDOS)
          END as NombresORazonSocial_Remitente
        `),
          Database.raw(
            `
              CASE
                WHEN ent1.ENT_NUMERO_IDENTIDAD = ? THEN 'Original'
                WHEN ent1.ENT_NUMERO_IDENTIDAD = ? THEN 'Original'
                WHEN ent1.ENT_NUMERO_IDENTIDAD = ? THEN 'Original'
                ELSE 'Copia'
              END as clase
            `,
            [id, id, id]
          )
        )
        .leftJoin(
          "ENT_ENTIDAD as ent1",
          "rd.DRA_ID_DESTINATARIO",
          "ent1.ENT_NUMERO_IDENTIDAD"
        )
        .leftJoin(
          "RCD_RADICADO_COPIAS_DESTINATARIO as rcd",
          "rd.DRA_RADICADO",
          "rcd.RCD_RADICADO"
        )
        .leftJoin(
          "ENT_ENTIDAD as ent2",
          "rcd.RCD_ID_DESTINATARIO",
          "ent2.ENT_NUMERO_IDENTIDAD"
        )
        .leftJoin(
          "ENT_ENTIDAD as ent3",
          "rd.DRA_ID_REMITENTE",
          "ent3.ENT_NUMERO_IDENTIDAD"
        );

      if (start && end) {
        if (role !== "ADM_ROL") {
          query
            .whereNotNull("rd.DRA_FECHA_EVACUACION_ENTRADA")
            .whereNotNull("rd.DRA_FECHA_EVACUACION_SALIDA")
            .andWhereRaw(
              `(rd.DRA_FECHA_EVACUACION_ENTRADA >= ? AND rd.DRA_FECHA_EVACUACION_SALIDA <= ?) AND (rd.DRA_ID_DESTINATARIO = ? OR rcd.RCD_ID_DESTINATARIO = ?)`,
              [start, end, id, id]
            );
          } else {
          query
            .whereNotNull("rd.DRA_FECHA_EVACUACION_ENTRADA")
            .whereNotNull("rd.DRA_FECHA_EVACUACION_SALIDA")
            .andWhereRaw(
              `(rd.DRA_FECHA_EVACUACION_ENTRADA >= ? AND rd.DRA_FECHA_EVACUACION_SALIDA <= ?)`,
              [start, end]
            );
        }
      }

      if (days) {
        if (role !== "ADM_ROL") {
          query
          .whereNotNull("rd.DRA_FECHA_EVACUACION_ENTRADA")
          .andWhereRaw(
            `DATE(rd.DRA_FECHA_EVACUACION_ENTRADA) >= ? AND (rd.DRA_ID_DESTINATARIO = ? OR rcd.RCD_ID_DESTINATARIO = ?)`,
            [moment().subtract(days, "days").format("YYYY-MM-DD"), id, id]
          );
        } else {
          query
          .whereNotNull("rd.DRA_FECHA_EVACUACION_ENTRADA")
          .andWhereRaw(
            `DATE(rd.DRA_FECHA_EVACUACION_ENTRADA) >= ?`,
            [moment().subtract(days, "days").format("YYYY-MM-DD")]
          );
        }
      }

      if (!days && !start) {
        if (role !== "ADM_ROL") {
          query.where("rd.DRA_ID_DESTINATARIO", id) .orWhere("rcd.RCD_ID_DESTINATARIO", id);
        }
      }

      const results = await query;

      return response.status(200).json({
        data: results,
        message: { success: "Búsqueda exitosa" },
      });
    } catch (err) {
      console.log(err);
      return response
        .status(500)
        .json({ data: null, message: { error: "Hubo un error" } });
    }
  }

  public async getSummaryRecipients({
    request,
    response,
  }: HttpContextContract) {
    try {
      const id = request.input("id-destinatario");
      let workdays: any[] = []
      let nonworkingdays: any[] = []

      const cgeConfiguracion = await Database.from("CGE_CONFIGURACION_GENERAL")
        .select("CGE_DIAS_HABILES")
        .first();

      const useWorkDays =
        cgeConfiguracion && cgeConfiguracion.CGE_DIAS_HABILES !== null
          ? cgeConfiguracion.CGE_DIAS_HABILES
          : false;

      const rads: any[] = await Database.from("radicado_details as rd")
        .leftJoin(
          "ENT_ENTIDAD as ent1",
          "rd.DRA_ID_DESTINATARIO",
          "ent1.ENT_NUMERO_IDENTIDAD"
        )
        .leftJoin(
          "RCD_RADICADO_COPIAS_DESTINATARIO as rcd",
          "rd.DRA_RADICADO",
          "rcd.RCD_RADICADO"
        )
        .leftJoin(
          "INF_INFORMACION_BASICA as ib",
          "rd.DRA_CODIGO_ASUNTO",
          "ib.INF_CODIGO_ASUNTO"
        )
        .where("rd.DRA_ID_DESTINATARIO", id)
        .orWhere("rcd.RCD_ID_DESTINATARIO", id)
        .select("rd.created_at", "ib.INF_TIMEPO_RESPUESTA", "ib.INF_UNIDAD");

        if (useWorkDays) {
          workdays = await Database.connection("citizen_attention")
            .from("PDD_PARAMETRIZACION_DIAS_DETALLE")
            .where("PDD_CODTDI_DIA", 1)
            .select("PDD_FECHA");

          workdays = workdays.map((item: { PDD_FECHA: string }) => moment(item.PDD_FECHA).format('yyyy-MM-DD HH:mm:ss.SSS'));

          nonworkingdays = await Database.connection("citizen_attention")
          .from("PDD_PARAMETRIZACION_DIAS_DETALLE")
          .where("PDD_CODTDI_DIA", 2)
          .select("PDD_FECHA");

          nonworkingdays = nonworkingdays.map((item: { PDD_FECHA: string }) => moment(item.PDD_FECHA).format('yyyy-MM-DD HH:mm:ss.SSS'));
        }

      const responseObj: Record<string, number> = {
        documentos_vencidos_sin_tramitar: 0,
        documentos_en_fase_inicial_de_tramite: 0,
        documentos_a_tramitar_prontamente: 0,
        documentos_proximos_a_vencerse: 0,
        total: 0,
      };

      for (const rad of rads) {
        let tiempoTranscurrido = this.calcularTiempoTranscurrido(moment(rad.created_at).format('yyyy-MM-DD HH:mm:ss.SSS'), workdays, nonworkingdays);

        if (rad.INF_UNIDAD === 'Días') {
          tiempoTranscurrido = tiempoTranscurrido / 1440;
        }

        const estado = this.determineRadicadoState(
          tiempoTranscurrido,
          rad.INF_TIMEPO_RESPUESTA
        );
        responseObj[estado] += 1;
        responseObj.total++;

      }

      return response.status(200).json({
        data: responseObj,
        message: { success: "Successful search" },
      });
    } catch (err) {
      console.log(err);
      return response
        .status(500)
        .json({ data: null, message: { error: "Hubo un error" } });
    }
  }

  public async getSummaryFileds({ response }: HttpContextContract) {
    try {
      let workdays: any[] = []
      let nonworkingdays: any[] = []
      const cgeConfiguracion = await Database.from("CGE_CONFIGURACION_GENERAL")
        .select("CGE_DIAS_HABILES")
        .first();

      const useWorkDays =
        cgeConfiguracion && cgeConfiguracion.CGE_DIAS_HABILES !== null
          ? cgeConfiguracion.CGE_DIAS_HABILES
          : false;

      const rads: any[] = await Database.from("radicado_details as rd")
        .join(
          "INF_INFORMACION_BASICA as ib",
          "rd.DRA_CODIGO_ASUNTO",
          "ib.INF_CODIGO_ASUNTO"
        )
        .select("rd.created_at", "ib.INF_TIMEPO_RESPUESTA", "ib.INF_UNIDAD");

      if (useWorkDays) {
        workdays = await Database.connection("citizen_attention")
          .from("PDD_PARAMETRIZACION_DIAS_DETALLE")
          .where("PDD_CODTDI_DIA", 1)
          .select("PDD_FECHA");

        workdays = workdays.map((item: { PDD_FECHA: string }) => moment(item.PDD_FECHA).format('yyyy-MM-DD HH:mm:ss.SSS'));

        nonworkingdays = await Database.connection("citizen_attention")
        .from("PDD_PARAMETRIZACION_DIAS_DETALLE")
        .where("PDD_CODTDI_DIA", 2)
        .select("PDD_FECHA");

        nonworkingdays = nonworkingdays.map((item: { PDD_FECHA: string }) => moment(item.PDD_FECHA).format('yyyy-MM-DD HH:mm:ss.SSS'));
      }

      const responseObj: Record<string, number> = {
        documentos_vencidos_sin_tramitar: 0,
        documentos_en_fase_inicial_de_tramite: 0,
        documentos_a_tramitar_prontamente: 0,
        documentos_proximos_a_vencerse: 0,
        total: 0,
      };

      for (const rad of rads) {
        let tiempoTranscurrido = this.calcularTiempoTranscurrido(moment(rad.created_at).format('yyyy-MM-DD HH:mm:ss.SSS'), workdays, nonworkingdays);

        if (rad.INF_UNIDAD === 'Días') {
          tiempoTranscurrido = tiempoTranscurrido / 1440;
        }

        const estado = this.determineRadicadoState(
          tiempoTranscurrido,
          rad.INF_TIMEPO_RESPUESTA
        );
        responseObj[estado] += 1;
        responseObj.total++;

      }

      return response.status(200).json({
        data: responseObj,
        message: { success: "Successful search" },
      });
    } catch (err) {
      console.log(err);
      return response
        .status(500)
        .json({ data: null, message: { error: "Hubo un error" } });
    }
  }

  public calcularTiempoTranscurridoTodoLosDias (created_at: string) {
    const horaInicioLaboral = 8;
    const horaFinLaboral = 17;

    const fechaCreacion = DateTime.fromFormat(created_at, 'yyyy-MM-DD HH:mm:ss.SSS');

    const fechaActual = DateTime.local();

    let minutosTranscurridos = 0;

    let fechaIterativa = fechaCreacion;
    while (fechaIterativa < fechaActual) {
      if (fechaIterativa.weekday >= 1 && fechaIterativa.weekday <= 5) {
        if (
          (fechaIterativa.hour > horaInicioLaboral || (fechaIterativa.hour === horaInicioLaboral && fechaIterativa.minute >= 0)) &&
          (fechaIterativa.hour < horaFinLaboral || (fechaIterativa.hour === horaFinLaboral && fechaIterativa.minute <= 0))
        ) {
          minutosTranscurridos += 1;
        }
      }

      fechaIterativa = fechaIterativa.plus({ minutes: 1 });
    }

    return minutosTranscurridos;
  };

  public calcularTiempoTranscurrido (created_at: string,  workdays: string[], nonworkingdays: string[]) {
    const horaInicioLaboral = 8;
  const horaFinLaboral = 17;

  const fechaCreacion = DateTime.fromFormat(created_at, 'yyyy-MM-dd HH:mm:ss.SSS');
  const fechaActual = DateTime.local();

  let minutosTranscurridos = 0;

  let fechaIterativa = fechaCreacion;
  while (fechaIterativa < fechaActual) {
    const isDefaultWorkday = fechaIterativa.weekday >= 1 && fechaIterativa.weekday <= 5;
    const isAdditionalWorkday = workdays.includes(fechaIterativa.toFormat('yyyy-MM-dd'));
    const isAdditionalNonworkingday = nonworkingdays.includes(fechaIterativa.toFormat('yyyy-MM-dd'));

    if ((isDefaultWorkday || isAdditionalWorkday) && !isAdditionalNonworkingday) {
      if (
        (fechaIterativa.hour > horaInicioLaboral || (fechaIterativa.hour === horaInicioLaboral && fechaIterativa.minute >= 0)) &&
        (fechaIterativa.hour < horaFinLaboral || (fechaIterativa.hour === horaFinLaboral && fechaIterativa.minute <= 0))
      ) {
        minutosTranscurridos += 1;
      }
    }

    fechaIterativa = fechaIterativa.plus({ minutes: 1 });
  }

  return minutosTranscurridos;
  };

  private determineRadicadoState(
    elapsedWorkingTime: number,
    tiempoRespuesta: number
  ): string {
    if (elapsedWorkingTime > tiempoRespuesta) {
      return "documentos_vencidos_sin_tramitar";
    } else if (elapsedWorkingTime <= tiempoRespuesta * 0.5) {
      return "documentos_en_fase_inicial_de_tramite";
    } else if (elapsedWorkingTime <= tiempoRespuesta * 0.8) {
      return "documentos_a_tramitar_prontamente";
    } else if (elapsedWorkingTime <= tiempoRespuesta * 1.0) {
      return "documentos_proximos_a_vencerse";
    } else {
      return "";
    }
  }

  public async findById({ request, response }: HttpContextContract) {
    const { numberDocument, role } = request.qs();

    const { id } = request.params();
    try {
      if (numberDocument == process.env.CURRENT_USER_DOCUMENT) {
        const RadicadoById = RadicadoDetail.query();

        if (id) {
          RadicadoById.orWhere("DRA_RADICADO", "like", `%${id}%`);
        }

        if (role !== "ADM_ROL") {
          RadicadoById.where(
            "DRA_ID_DESTINATARIO",
            "=",
            `${process.env.CURRENT_USER_DOCUMENT}`
          );
        }

        const data = await RadicadoById.preload(
          "rn_radicado_remitente_to_entity"
        )
          .preload("rn_radicado_destinatario_to_entity")
          .select("*")
          .limit(100);

        if (data.length == 0) {
          return response
            .status(404)
            .send(
              new ApiResponse(
                [],
                EResponseCodes.NOT_FOUND,
                "No hay registros para mostrar"
              )
            );
        }

        return response
          .status(200)
          .send(new ApiResponse(data, EResponseCodes.OK, "Datos Encontrados"));
      } else {
        console.error("Intenta acceder de manera incorrecta");
        throw new Error("Intenta acceder de manera incorrecta");
      }
    } catch (error) {
      return response
        .status(400)
        .send(new ApiResponse([], EResponseCodes.FAIL, error.message));
    }
  }

  public async movementsFindById({ request, response }: HttpContextContract) {
    const { id } = request.params();
    try {
      const RadicadoById = RadicadoDetail.query();

      if (id) {
        RadicadoById.orWhere("DRA_RADICADO", "like", `%${id}%`);
      }

      const data = await RadicadoById.preload("rn_radicado_remitente_to_entity")
        .preload("rn_radicado_destinatario_to_entity")
        .select("*")
        .limit(100);

      if (data.length == 0) {
        return response
          .status(404)
          .send(
            new ApiResponse(
              [],
              EResponseCodes.NOT_FOUND,
              "No hay registros para mostrar"
            )
          );
      }

      return response
        .status(200)
        .send(new ApiResponse(data, EResponseCodes.OK, "Datos Encontrados"));
    } catch (error) {
      return response
        .status(400)
        .send(new ApiResponse([], EResponseCodes.FAIL, error.message));
    }
  }

  public async massiveFindById({ request, response }: HttpContextContract) {
    const { id } = request.params();
    try {
      const RadicadoById = RadicadoDetail.query();

      if (id) {
        RadicadoById.orWhere("DRA_RADICADO", "like", `%${id}%`);
      }

      const data = await RadicadoById.preload("rn_radicado_remitente_to_entity")
        .preload("rn_radicado_destinatario_to_entity")
        .select("*")
        .where("dra_estado_radicado", "Pendiente")
        .limit(100);

      if (data.length == 0) {
        return response
          .status(404)
          .send(
            new ApiResponse(
              [],
              EResponseCodes.NOT_FOUND,
              "No hay registros para mostrar"
            )
          );
      }

      return response
        .status(200)
        .send(new ApiResponse(data, EResponseCodes.OK, "Datos Encontrados"));
    } catch (error) {
      return response
        .status(400)
        .send(new ApiResponse([], EResponseCodes.FAIL, error.message));
    }
  }

  public async massiveFindByDate({ request, response }: HttpContextContract) {
    const { id } = request.params();

    try {
      const RadicadoById = RadicadoDetail.query();

      if (id) {
        RadicadoById.where("DRA_FECHA_RADICADO", "=", `${id}`);
      }

      const data = await RadicadoById.preload("rn_radicado_remitente_to_entity")
        .preload("rn_radicado_destinatario_to_entity")
        .select("*")
        .where("dra_estado_radicado", "Pendiente")
        .limit(100);

      if (data.length == 0) {
        return response
          .status(404)
          .send(
            new ApiResponse(
              [],
              EResponseCodes.NOT_FOUND,
              "No hay registros para mostrar"
            )
          );
      }

      return response
        .status(200)
        .send(new ApiResponse(data, EResponseCodes.OK, "Datos Encontrados"));
    } catch (error) {
      return response
        .status(400)
        .send(new ApiResponse([], EResponseCodes.FAIL, error.message));
    }
  }

  async massiveIndexing({ request, response }: HttpContextContract) {
    const files = request.files("files");

    try {
      const invalidRadicados: string[] = [];
      const radicados: string[] = [];

      if (files.length <= 0) {
        return response.status(400).json({
          message: "Error: Se debe enviar al menos 1 archivo",
        });
      }

      for (const file of files) {
        const radicado: string = file.clientName.replace(".pdf", "");
        const exists = await Database.from("radicado_details")
          .where("DRA_RADICADO", radicado)
          .first();
        radicados.push(radicado);
        if (!exists) {
          invalidRadicados.push(radicado);
        }
      }

      if (invalidRadicados.length > 0) {
        return response.status(400).json({
          message:
            "Algunos números de radicado no se encuentran, por favor verifique",
          invalidRadicados,
        });
      }

      const bucketName = "sapiencia-document-management";
      const storage = new Storage();
      const bucket = storage.bucket(bucketName);

      for (const file of files) {
        const radicado = file.clientName.replace(".pdf", "");
        const uniqueFileName = `${uuidv4()}.pdf`;
        if (file.tmpPath) {
          await bucket.upload(file.tmpPath, {
            destination: `${uniqueFileName}`,
          });
          await Database.table("ARA_ADJUNTOS_RADICADOS").insert({
            ARA_RADICADO: radicado,
            ARA_PATH: `${uniqueFileName}`,
          });
        } else {
          return response.status(400).json({
            message:
              "Algunos números de radicado no se encuentran, por favor verifique",
            invalidRadicados,
          });
        }
      }

      return response
        .status(200)
        .json({ message: "Archivos subidos con éxito", radicados });
    } catch (error) {
      console.log(error);
      return response.status(500).json({ message: "Error al subir archivos" });
    }
  }

  async create({ request, response }: HttpContextContract) {
    try {
      const data = request.only([
        "DRA_FECHA_RADICADO",
        "DRA_TIPO_RADICADO",
        "DRA_RADICADO_ORIGEN",
        "DRA_RADICADO_POR",
        "DRA_NOMBRE_RADICADOR",
        "DRA_ID_REMITENTE",
        "DRA_CODIGO_ASUNTO",
        "DRA_TIPO_ASUNTO",
        "DRA_PRIORIDAD_ASUNTO",
        "DRA_ID_DESTINATARIO",
        "DRA_OBSERVACION",
        "DRA_NUM_ANEXOS",
        "DRA_NUM_FOLIOS",
        "DRA_NUM_CAJAS",
        "DRA_TIPO_DOCUMENTO_RADICADO",
        "DRA_PRIORIDAD",
        "DRA_TIPO_INFO",
        "DRA_CREADO_POR",
        "DRA_ESTADO",
      ]);

      const currentCGERecibido = await Database.from(
        "CGE_CONFIGURACION_GENERAL"
      )
        .where("CGE_CODIGO", 1)
        .select("CGE_RECIBIDO")
        .first();

      if (currentCGERecibido) {
        await Database.from("CGE_CONFIGURACION_GENERAL")
          .where("CGE_CODIGO", 1)
          .increment("CGE_RECIBIDO", 1);
      }

      await Database.table("radicado_details").insert({
        DRA_RADICADO: currentCGERecibido.CGE_RECIBIDO + 1,
        ...data,
      });

      const copiesData = request.input("copies", []).map((copy) => ({
        ...copy,
        RCD_RADICADO: currentCGERecibido.CGE_RECIBIDO + 1,
      }));

      if (copiesData.length > 0) {
        await Database.table("RCD_RADICADO_COPIAS_DESTINATARIO").insert(
          copiesData
        );
      }

      return response.status(201).json({
        message: "Radicado guardado exitosamente",
        data: {
          radicado: data,
          copias: copiesData,
          num_radicado: currentCGERecibido.CGE_RECIBIDO + 1,
        },
      });
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ error: "Ocurrió un error al guardar el radicado" });
    }
  }

  async findByCreateBy({ request, response }) {
    try {
      const { userId } = request.params();
      let copies: any = [];

      const radicado = await Database.from("radicado_details")
        .where("DRA_CREADO_POR", userId)
        .where("DRA_ESTADO", "INCOMPLETO")
        .first();

      if (!radicado) {
        return response.json({
          radicado: {},
          copias: [],
        });
      }

      copies = await Database.from("RCD_RADICADO_COPIAS_DESTINATARIO").where(
        "RCD_RADICADO",
        radicado.DRA_RADICADO
      );

      return response.json({
        radicado: radicado,
        copias: copies,
      });
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ error: "Ocurrió un error al consultar el radicado" });
    }
  }

  async complete({ request, response }: HttpContextContract) {
    try {
      const { numRadicado } = request.params();

      const data = request.only([
        "DRA_FECHA_RADICADO",
        "DRA_TIPO_RADICADO",
        "DRA_RADICADO_ORIGEN",
        "DRA_RADICADO_POR",
        "DRA_NOMBRE_RADICADOR",
        "DRA_ID_REMITENTE",
        "DRA_CODIGO_ASUNTO",
        "DRA_TIPO_ASUNTO",
        "DRA_PRIORIDAD_ASUNTO",
        "DRA_ID_DESTINATARIO",
        "DRA_OBSERVACION",
        "DRA_OPCIONES_RESPUESTA",
        "DRA_REFERENCIA",
        "DRA_NUM_ANEXOS",
        "DRA_NUM_FOLIOS",
        "DRA_NUM_CAJAS",
        "DRA_TIPO_DOCUMENTO_RADICADO",
        "DRA_PRIORIDAD",
        "DRA_TIPO_INFO",
        "DRA_ESTADO",
      ]);

      await Database.from("radicado_details")
        .where("DRA_RADICADO", numRadicado)
        .update(data);

      const copiesData = request.input("copies", []).map((copy) => ({
        ...copy,
        RCD_RADICADO: numRadicado,
      }));

      if (copiesData.length > 0) {
        await Database.from("RCD_RADICADO_COPIAS_DESTINATARIO")
          .where("RCD_RADICADO", numRadicado)
          .delete();
        await Database.table("RCD_RADICADO_COPIAS_DESTINATARIO").insert(
          copiesData
        );
      }

      const rrrData = request.input("rrData", []) as {
        RRR_ID_RADICADO: string;
        RRR_ID_RESPUESTAS_RELACIONADAS: string;
      }[];

      if (rrrData.length > 0) {
        await Database.table("RRR_RESPUESTAS_RELACIONADAS").insert(rrrData);
      }

      const files = request.files("files");
      const bucketName = "sapiencia-document-management";
      const storage = new Storage();
      const bucket = storage.bucket(bucketName);

      for (const file of files) {
        const uniqueFileName = `${uuidv4()}_${file.clientName}`;
        if (file.tmpPath) {
          await bucket.upload(file.tmpPath, {
            destination: `${uniqueFileName}`,
          });
          await Database.table("ARA_ADJUNTOS_RADICADOS").insert({
            ARA_RADICADO: numRadicado,
            ARA_PATH: uniqueFileName,
          });
        } else {
          return response.status(400).json({
            message: "Error al subir archivos",
          });
        }
      }

      return response.json({ message: "Radicado actualizado exitosamente" });
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ error: "Ocurrió un error al actualizar el radicado" });
    }
  }

  public async findAllPending({ request, response }: HttpContextContract) {
    const { numberDocument, role } = request.qs();
    const { id } = request.params();

    try {
      if (numberDocument == process.env.CURRENT_USER_DOCUMENT) {
        const RadicadoById = RadicadoDetail.query();

        if (id) {
          RadicadoById.orWhere("DRA_RADICADO", "like", `%${id}%`);
        }

        if (role !== "ADM_ROL") {
          RadicadoById.where(
            "dra_id_destinatario",
            "=",
            `${process.env.CURRENT_USER_DOCUMENT}`
          );
        }

        const data = await RadicadoById.preload(
          "rn_radicado_remitente_to_entity"
        )
          .preload("rn_radicado_destinatario_to_entity")
          .where("dra_estado_radicado", "Pendiente")
          .select("*")
          .limit(100);

        if (data.length == 0) {
          return response
            .status(404)
            .send(
              new ApiResponse(
                [],
                EResponseCodes.NOT_FOUND,
                "No hay registros para mostrar"
              )
            );
        }

        return response
          .status(200)
          .send(new ApiResponse(data, EResponseCodes.OK, "Datos Encontrados"));
      } else {
        console.error("Intenta acceder de manera incorrecta");
        throw new Error("Intenta acceder de manera incorrecta");
      }
    } catch (error) {
      return response
        .status(400)
        .send(new ApiResponse([], EResponseCodes.FAIL, error.message));
    }
  }
}
