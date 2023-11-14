import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";
import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import { ApiResponse } from "App/Utils/ApiResponses";
import moment from "moment";

export default class MassiveProcessesController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    try {
      await this.insertRadicadoMovement(request.body().data);
      await this.updateRadicado(request.body());

      return response
        .status(200)
        .send(new ApiResponse([], EResponseCodes.OK, "Evacuación Exitosa"));
    } catch (err) {
      console.log(err.message);
      return response
        .status(500)
        .send(new ApiResponse([], EResponseCodes.FAIL, err.message));
    }
  }

  public async insertRadicadoMovement(data: string) {
    try {
      await Database.rawQuery(
        `INSERT INTO ER_ESTADOS_RADICADOS (ER_RADICADO, ER_FECHA_RADICADO, ER_TIPO_RADICADO, ER_RADICADO_ORIGEN, ER_RADICADO_POR, ER_NOMBRE_RADICADOR, ER_ID_REMITENTE, ER_CODIGO_ASUNTO, ER_TIPO_ASUNTO, ER_PRIORIDAD_ASUNTO, ER_ID_DESTINATARIO, ER_OPCIONES_RESPUESTA, ER_REFERENCIA, ER_OBSERVACION, ER_NUM_ANEXOS, ER_NUM_FOLIOS, ER_NUM_CAJAS, ER_ESTADO_RADICADO, ER_MOVIMIENTO, ER_USUARIO) SELECT DRA_RADICADO, DRA_FECHA_RADICADO, DRA_TIPO_RADICADO, DRA_RADICADO_ORIGEN, DRA_RADICADO_POR, DRA_NOMBRE_RADICADOR, DRA_ID_REMITENTE, DRA_CODIGO_ASUNTO, DRA_TIPO_ASUNTO, DRA_PRIORIDAD_ASUNTO, DRA_ID_DESTINATARIO, DRA_OPCIONES_RESPUESTA, DRA_REFERENCIA, DRA_OBSERVACION, DRA_NUM_ANEXOS, DRA_NUM_FOLIOS, DRA_NUM_CAJAS, DRA_ESTADO_RADICADO, DRA_MOVIMIENTO, DRA_USUARIO FROM radicado_details WHERE DRA_RADICADO IN (${data})`
      );
    } catch (e) {
      console.log(e.message);
    }
  }

  public async updateRadicado(data) {
    //Evacuar
    try {
      await Database.rawQuery(
        `UPDATE radicado_details SET dra_estado_radicado = "Evacuado", dra_fecha_evacuacion_salida = ?, dra_usuario = ? WHERE dra_radicado IN (${data.data})`,
        [moment().format("YYYY-MM-DD HH:mm:ss"), data.dra_usuario]
      );
    } catch (e) {
      console.log(e.message);
    }
  }
}
