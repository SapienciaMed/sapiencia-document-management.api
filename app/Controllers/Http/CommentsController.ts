import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";
import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import Comment from "App/Models/Comment";
import { ApiResponse } from "App/Utils/ApiResponses";

export default class CommentsController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    try {
      // await Database.transaction(async (trx) => {
      //   try {
      //     const data = await request.validate(GeneralConfigurationValidator);
      //     return response.send(
      //       await GeneralConfigurationProvider.createGeneralConfiguration(
      //         data,
      //         trx
      //       )
      //     );
      //   } catch (err) {
      //     await trx.rollback();
      //     return response.badRequest(
      //       new ApiResponse(null, EResponseCodes.FAIL, String(err))
      //     );
      //   }
      // })
      await this.insertRadicadoMovement(request.body().dra_radicado);
      await this.updateRadicado(request.body());
      const comment = new Comment();
      //const data = await request.validate(GeneralConfigurationValidator);
      comment.fill({
        inf_radicado: request.body().dra_radicado,
        inf_comentario: request.body().comentario,
      });
      await comment.save();

      return response
        .status(200)
        .send(
          new ApiResponse(comment, EResponseCodes.OK, "Comentario Guardado")
        );
    } catch (err) {
      console.log(err.message);
      return response
        .status(500)
        .send(new ApiResponse([], EResponseCodes.FAIL, err.message));
    }
  }

  public async insertRadicadoMovement(radicado: string) {
    try {
      await Database.rawQuery(
        `INSERT INTO ER_ESTADOS_RADICADOS (ER_RADICADO, ER_FECHA_RADICADO, ER_TIPO_RADICADO, ER_RADICADO_ORIGEN, ER_RADICADO_POR, ER_NOMBRE_RADICADOR, ER_ID_REMITENTE, ER_CODIGO_ASUNTO, ER_TIPO_ASUNTO, ER_PRIORIDAD_ASUNTO, ER_ID_DESTINATARIO, ER_OPCIONES_RESPUESTA, ER_REFERENCIA, ER_OBSERVACION, ER_NUM_ANEXOS, ER_NUM_FOLIOS, ER_NUM_CAJAS, ER_ESTADO_RADICADO, ER_MOVIMIENTO, ER_USUARIO) SELECT DRA_RADICADO, DRA_FECHA_RADICADO, DRA_TIPO_RADICADO, DRA_RADICADO_ORIGEN, DRA_RADICADO_POR, DRA_NOMBRE_RADICADOR, DRA_ID_REMITENTE, DRA_CODIGO_ASUNTO, DRA_TIPO_ASUNTO, DRA_PRIORIDAD_ASUNTO, DRA_ID_DESTINATARIO, DRA_OPCIONES_RESPUESTA, DRA_REFERENCIA, DRA_OBSERVACION, DRA_NUM_ANEXOS, DRA_NUM_FOLIOS, DRA_NUM_CAJAS, DRA_ESTADO_RADICADO, DRA_MOVIMIENTO, DRA_USUARIO FROM radicado_details WHERE DRA_RADICADO = ?`,
        [radicado]
      );
    } catch (e) {
      console.log(e.message);
    }
  }

  public async updateRadicado(data) {
    //Activar pasa de evacuado a pendiente
    if (data.typeModal == "Activar" || data.typeModal == "asignar") {
      try {
        await Database.rawQuery(
          `UPDATE radicado_details SET dra_id_destinatario = ?, dra_estado_radicado = ?, dra_usuario = ? WHERE dra_radicado = ?`,
          [
            data.dra_destinatario,
            data.dra_estado_radicado,
            data.dra_usuario,
            data.dra_radicado,
          ]
        );
      } catch (e) {
        console.log(e.message);
      }
    }
    //Reversar solo cambia destinatario
    if (data.typeModal == "Reversar" || data.typeModal == "devolucion") {
      try {
        await Database.rawQuery(
          `UPDATE radicado_details SET dra_id_destinatario = ?, dra_usuario = ? WHERE dra_radicado = ?`,
          [data.dra_destinatario, data.dra_usuario, data.dra_radicado]
        );
      } catch (e) {
        console.log(e.message);
      }
    }
  }

  public async show({ request, response }: HttpContextContract) {
    const { id } = request.params();

    try {
      const comments = await Comment.query().where("inf_radicado", id);

      if (!comments) {
        return response
          .status(400)
          .send(
            new ApiResponse([], EResponseCodes.NOT_FOUND, "No hay comentarios")
          );
      }
      return response
        .status(200)
        .send(
          new ApiResponse(
            comments,
            EResponseCodes.OK,
            "Comentarios cargados con éxito"
          )
        );
    } catch (err) {
      return response
        .status(500)
        .send(new ApiResponse([], EResponseCodes.FAIL, "No hay comentarios"));
    }
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
