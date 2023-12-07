import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import Subject from "App/Models/Subject";
import SubjectDocumentTypeRelation from "App/Models/SubjectDocumentTypeRelation";
import { ApiResponse } from "App/Utils/ApiResponses";

export default class SubjectsController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({ request, response }: HttpContextContract) {
    const { id } = request.params();

    try {
      const subjectList = await Subject.query().where("ras_id", id);

      if (!subjectList) {
        return response
          .status(400)
          .send(
            new ApiResponse(
              [],
              EResponseCodes.NOT_FOUND,
              "Id Asunto no encontrado"
            )
          );
      }
      return response
        .status(200)
        .send(
          new ApiResponse(
            subjectList,
            EResponseCodes.OK,
            "Asunto cargado con éxito"
          )
        );
    } catch (err) {
      return response
        .status(500)
        .send(
          new ApiResponse(
            [],
            EResponseCodes.FAIL,
            "Hubo un error al cargar el asunto"
          )
        );
    }
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}

  public async subjectDocumentById({ request, response }: HttpContextContract) {
    const { subjectId } = request.params();

    try {
      const subjectDocumentList = await SubjectDocumentTypeRelation.query()
        .where("atd_id_asunto", subjectId)
        .preload("rn_document_type");

      if (!subjectDocumentList) {
        return response
          .status(400)
          .send(
            new ApiResponse(
              [],
              EResponseCodes.NOT_FOUND,
              "No hay documentos relacionados para ese Asunto"
            )
          );
      }
      return response
        .status(200)
        .send(
          new ApiResponse(
            subjectDocumentList,
            EResponseCodes.OK,
            "Documentos del asunto cargados con éxito"
          )
        );
    } catch (err) {
      return response
        .status(500)
        .send(
          new ApiResponse(
            [],
            EResponseCodes.FAIL,
            "Hubo un error al cargar los documentos del asunto"
          )
        );
    }
  }
}
