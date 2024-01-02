import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import SubjectDocumentType from "App/Models/SubjectDocumentType";
import { ApiResponse } from "App/Utils/ApiResponses";

export default class SubjectsDocumentsController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({ request, response }: HttpContextContract) {
    const { id } = request.params();

    try {
      const subjectList = await SubjectDocumentType.query().where("rta_id", id);

      if (!subjectList) {
        return response
          .status(400)
          .send(
            new ApiResponse(
              [],
              EResponseCodes.NOT_FOUND,
              "Id del documento asunto no encontrado"
            )
          );
      }
      return response
        .status(200)
        .send(
          new ApiResponse(
            subjectList,
            EResponseCodes.OK,
            "Documento del asunto cargado con éxito"
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
}
