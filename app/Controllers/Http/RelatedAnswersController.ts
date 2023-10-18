import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import RadicadoDetail from "App/Models/RadicadoDetail";
import RelatedAnswer from "App/Models/RelatedAnswer";
import { ApiResponse } from "App/Utils/ApiResponses";

export default class RelatedAnswersController {
  public async index({}: HttpContextContract) {
    // const radicadoDetailsList = await RelatedAnswer.query()
    //   .preload("rn_related_answer_to_radicado_detail_respuestas")
    //   .select("*");
    // if (radicadoDetailsList.length == 0) {
    //   return response
    //     .status(404)
    //     .send(
    //       new ApiResponse(
    //         [],
    //         EResponseCodes.NOT_FOUND,
    //         "No hay registros para mostrar"
    //       )
    //     );
    // }
    // const listaRadicados = radicadoDetailsList.map(
    //   (item) => item.rn_related_answer_to_radicado_detail_respuestas
    // );
    // return response.status(200).send(radicadoDetailsList);
  }

  public async store({}: HttpContextContract) {}

  public async show({ response, request }: HttpContextContract) {
    const { id } = request.params();
    try {
      const radicadoRelatedAnswersList = await RelatedAnswer.query()
        .preload("rn_related_answer_to_radicado_detail_respuestas")
        .select("rrr_id_respuestas_relacionadas")
        .where("rrr_id_radicado", "=", id);

      if (radicadoRelatedAnswersList.length == 0) {
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

      const radicadosList = radicadoRelatedAnswersList.map(
        (item) => item.rn_related_answer_to_radicado_detail_respuestas
      );

      return response
        .status(200)
        .send(
          new ApiResponse(
            radicadosList,
            EResponseCodes.OK,
            "Datos cargados con éxito"
          )
        );
    } catch (error) {
      return response
        .status(400)
        .send(new ApiResponse([], EResponseCodes.FAIL, error.message));
    }
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}

  public async findByIdAndType({ request, response }: HttpContextContract) {
    const { id, type } = request.params();
    try {
      const RadicadoByIdAndType = RadicadoDetail.query();

      if (id) {
        RadicadoByIdAndType.orWhere("DRA_RADICADO", "like", `%${id}%`);
      }

      if (type) {
        RadicadoByIdAndType.orWhere("DRA_TIPO_RADICADO", "=", type);
      }

      const data = await RadicadoByIdAndType.preload(
        "rn_radicado_remitente_to_entity"
      )
        .preload("rn_radicado_destinatario_to_entity")
        .select("*");

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
