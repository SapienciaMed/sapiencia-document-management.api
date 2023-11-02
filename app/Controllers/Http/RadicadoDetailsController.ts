import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import moment from "moment";
import Database from "@ioc:Adonis/Lucid/Database";
import RadicadoDetail from "App/Models/RadicadoDetail";
import { ApiResponse } from "App/Utils/ApiResponses";
import { EResponseCodes } from "App/Constants/ResponseCodesEnum";

export default class RadicadoDetailsController {
  public async index({ response }: HttpContextContract) {
    const radicadoDetailsList = await RadicadoDetail.query().preload(
      "rn_radicado_details_to_related_answer"
    );

    return response.status(200).send(radicadoDetailsList);
  }

  public async store({ response }: HttpContextContract) {
    // const payload = await request.validate({
    //   schema: RadicadoDetailValidator
    // })
    return response.status(200).json({
      message: "Radicado store",
    });
  }

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
        query
          .whereNotNull("rd.DRA_FECHA_EVACUACION_ENTRADA")
          .whereNotNull("rd.DRA_FECHA_EVACUACION_SALIDA")
          .andWhereRaw(
            `(rd.DRA_FECHA_EVACUACION_ENTRADA >= ? AND rd.DRA_FECHA_EVACUACION_SALIDA <= ?) AND (rd.DRA_ID_DESTINATARIO = ? OR rcd.RCD_ID_DESTINATARIO = ?)`,
            [start, end, id, id]
          );
      }

      if (days) {
        query
          .whereNotNull("rd.DRA_FECHA_EVACUACION_ENTRADA")
          .andWhereRaw(
            `DATE(rd.DRA_FECHA_EVACUACION_ENTRADA) >= ? AND (rd.DRA_ID_DESTINATARIO = ? OR rcd.RCD_ID_DESTINATARIO = ?)`,
            [moment().subtract(days, "days").format("YYYY-MM-DD"), id, id]
          );
      }

      if (!days && !start) {
        query
          .where("rd.DRA_ID_DESTINATARIO", id)
          .orWhere("rcd.RCD_ID_DESTINATARIO", id);
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
      const query = Database.from("radicado_details as rd")
        .select(
          Database.raw(`
              CASE
                  WHEN rd.DRA_FECHA_EVACUACION_SALIDA IS NULL THEN
                      CASE
                          WHEN DATEDIFF(CURDATE(), rd.DRA_FECHA_RADICADO) > 15 THEN 'documentos_vencidos_sin_tramitar'
                          ELSE 'documentos_en_fase_inicial_de_tramite'
                      END
                  ELSE
                      CASE
                          WHEN DATEDIFF(rd.DRA_FECHA_EVACUACION_SALIDA, rd.DRA_FECHA_RADICADO) / DATEDIFF(CURDATE(), rd.DRA_FECHA_RADICADO) <= 0.5 THEN 'documentos_en_fase_inicial_de_tramite'
                          WHEN DATEDIFF(rd.DRA_FECHA_EVACUACION_SALIDA, rd.DRA_FECHA_RADICADO) / DATEDIFF(CURDATE(), rd.DRA_FECHA_RADICADO) <= 0.8 THEN 'documentos_a_tramitar_prontamente'
                          WHEN DATEDIFF(rd.DRA_FECHA_EVACUACION_SALIDA, rd.DRA_FECHA_RADICADO) / DATEDIFF(CURDATE(), rd.DRA_FECHA_RADICADO) <= 1.0 THEN 'documentos_proximos_a_vencerse'
                          ELSE 'documentos_vencidos_sin_tramitar'
                      END
              END as estado_documento
          `)
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
        );

      query.select(Database.raw("COUNT(*) as contador_estado"));

      query.groupByRaw(`
          CASE
              WHEN rd.DRA_FECHA_EVACUACION_SALIDA IS NULL THEN
                  CASE
                      WHEN DATEDIFF(CURDATE(), rd.DRA_FECHA_RADICADO) > 15 THEN 'documentos_vencidos_sin_tramitar'
                      ELSE 'documentos_en_fase_inicial_de_tramite'
                  END
              ELSE
                  CASE
                      WHEN DATEDIFF(rd.DRA_FECHA_EVACUACION_SALIDA, rd.DRA_FECHA_RADICADO) / DATEDIFF(CURDATE(), rd.DRA_FECHA_RADICADO) <= 0.5 THEN 'documentos_en_fase_inicial_de_tramite'
                      WHEN DATEDIFF(rd.DRA_FECHA_EVACUACION_SALIDA, rd.DRA_FECHA_RADICADO) / DATEDIFF(CURDATE(), rd.DRA_FECHA_RADICADO) <= 0.8 THEN 'documentos_a_tramitar_prontamente'
                      WHEN DATEDIFF(rd.DRA_FECHA_EVACUACION_SALIDA, rd.DRA_FECHA_RADICADO) / DATEDIFF(CURDATE(), rd.DRA_FECHA_RADICADO) <= 1.0 THEN 'documentos_proximos_a_vencerse'
                      ELSE 'documentos_vencidos_sin_tramitar'
                  END
          END
      `);

      query
        .where("rd.DRA_ID_DESTINATARIO", id)
        .orWhere("rcd.RCD_ID_DESTINATARIO", id);

      const totalQuery = Database.from("radicado_details as rd").select(
        Database.raw("COUNT(*) as contador_total")
      );

      const [result, totalResult] = await Promise.all([query, totalQuery]);

      const responseObj = {
        documentos_vencidos_sin_tramitar: 0,
        documentos_en_fase_inicial_de_tramite: 0,
        documentos_a_tramitar_prontamente: 0,
        documentos_proximos_a_vencerse: 0,
        total: 0,
      };

      result.forEach((item) => {
        responseObj[item.estado_documento] = item.contador_estado;
      });

      responseObj.total = totalResult[0].contador_total;

      return response.status(200).json({
        data: responseObj,
        message: { success: "Búsqueda exitosa" },
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
      const query = Database.from("radicado_details as rd").select(
        Database.raw(`
              CASE
                  WHEN rd.DRA_FECHA_EVACUACION_SALIDA IS NULL THEN
                      CASE
                          WHEN DATEDIFF(CURDATE(), rd.DRA_FECHA_RADICADO) > 15 THEN 'documentos_vencidos_sin_tramitar'
                          ELSE 'documentos_en_fase_inicial_de_tramite'
                      END
                  ELSE
                      CASE
                          WHEN DATEDIFF(rd.DRA_FECHA_EVACUACION_SALIDA, rd.DRA_FECHA_RADICADO) / DATEDIFF(CURDATE(), rd.DRA_FECHA_RADICADO) <= 0.5 THEN 'documentos_en_fase_inicial_de_tramite'
                          WHEN DATEDIFF(rd.DRA_FECHA_EVACUACION_SALIDA, rd.DRA_FECHA_RADICADO) / DATEDIFF(CURDATE(), rd.DRA_FECHA_RADICADO) <= 0.8 THEN 'documentos_a_tramitar_prontamente'
                          WHEN DATEDIFF(rd.DRA_FECHA_EVACUACION_SALIDA, rd.DRA_FECHA_RADICADO) / DATEDIFF(CURDATE(), rd.DRA_FECHA_RADICADO) <= 1.0 THEN 'documentos_proximos_a_vencerse'
                          ELSE 'documentos_vencidos_sin_tramitar'
                      END
              END as estado_documento
          `)
      );

      query.select(Database.raw("COUNT(*) as contador_estado"));

      query.groupByRaw(`
          CASE
              WHEN rd.DRA_FECHA_EVACUACION_SALIDA IS NULL THEN
                  CASE
                      WHEN DATEDIFF(CURDATE(), rd.DRA_FECHA_RADICADO) > 15 THEN 'documentos_vencidos_sin_tramitar'
                      ELSE 'documentos_en_fase_inicial_de_tramite'
                  END
              ELSE
                  CASE
                      WHEN DATEDIFF(rd.DRA_FECHA_EVACUACION_SALIDA, rd.DRA_FECHA_RADICADO) / DATEDIFF(CURDATE(), rd.DRA_FECHA_RADICADO) <= 0.5 THEN 'documentos_en_fase_inicial_de_tramite'
                      WHEN DATEDIFF(rd.DRA_FECHA_EVACUACION_SALIDA, rd.DRA_FECHA_RADICADO) / DATEDIFF(CURDATE(), rd.DRA_FECHA_RADICADO) <= 0.8 THEN 'documentos_a_tramitar_prontamente'
                      WHEN DATEDIFF(rd.DRA_FECHA_EVACUACION_SALIDA, rd.DRA_FECHA_RADICADO) / DATEDIFF(CURDATE(), rd.DRA_FECHA_RADICADO) <= 1.0 THEN 'documentos_proximos_a_vencerse'
                      ELSE 'documentos_vencidos_sin_tramitar'
                  END
          END
      `);

      const totalQuery = Database.from("radicado_details as rd").select(
        Database.raw("COUNT(*) as contador_total")
      );

      const [result, totalResult] = await Promise.all([query, totalQuery]);

      const responseObj = {
        documentos_vencidos_sin_tramitar: 0,
        documentos_en_fase_inicial_de_tramite: 0,
        documentos_a_tramitar_prontamente: 0,
        documentos_proximos_a_vencerse: 0,
        total: 0,
      };

      result.forEach((item) => {
        responseObj[item.estado_documento] = item.contador_estado;
      });

      responseObj.total = totalResult[0].contador_total;

      return response.status(200).json({
        data: responseObj,
        message: { success: "Búsqueda exitosa" },
      });
    } catch (err) {
      console.log(err);
      return response
        .status(500)
        .json({ data: null, message: { error: "Hubo un error" } });
    }
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}

  public async findById({ request, response }: HttpContextContract) {
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
}
