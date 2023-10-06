import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import RecipientInformation from "App/Models/RecipientInformation";

export default class RecipientInformationsController {
  public async index({ response }: HttpContextContract) {
    const senderLists = await RecipientInformation.all();
    return response.status(200).send(senderLists);
  }

  public async store({}: HttpContextContract) {}

  public async show({ request, response }: HttpContextContract) {
    const { id } = request.params();
    try {
      const senderData = await RecipientInformation.findByOrFail(
        "USR_NUMERO_IDENTIDAD",
        id
      );

      return response.status(200).json({
        data: senderData,
        message: { success: "Destinatario Encontrado" },
      });
    } catch (err) {
      return response
        .status(200)
        .json({ data: null, message: { error: "Destinatario no Encontrado" } });
    }
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
