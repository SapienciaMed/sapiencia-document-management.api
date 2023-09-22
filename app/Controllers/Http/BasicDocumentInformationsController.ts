import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import BasicDocumentInformation from "App/Models/BasicDocumentInformation";

export default class BasicDocumentInformationsController {
  public async index({ response }: HttpContextContract) {
    const subjectList = await BasicDocumentInformation.all();
    return response.status(200).send(subjectList);
  }

  public async store({}: HttpContextContract) {}

  public async show({ request, response }: HttpContextContract) {
    const { id } = request.params();
    try {
      const subject = await BasicDocumentInformation.findByOrFail(
        "INF_CODIGO_ASUNTO",
        id
      );
      return response.status(200).json({
        data: subject,
        message: { success: "Asunto Encontrado" },
      });
    } catch (err) {
      return response
        .status(200)
        .json({ data: null, message: { error: "Asunto no Encontrado" } });
    }
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
