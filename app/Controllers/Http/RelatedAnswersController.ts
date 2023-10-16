import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import RelatedAnswer from "App/Models/RelatedAnswer";
import { ApiResponse } from "App/Utils/ApiResponses";

export default class RelatedAnswersController {
  public async index({ response }: HttpContextContract) {
    const radicadoDetailsList = await RelatedAnswer.query()
      .preload("rn_related_answer_to_radicado_detail_respuestas")
      .select("rrr_id_respuestas_relacionadas");

    if (radicadoDetailsList.length == 0) {
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

    const listaRadicados = radicadoDetailsList.map(
      (item) => item.rn_related_answer_to_radicado_detail_respuestas
    );

    return response.status(200).send(listaRadicados);
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
}
