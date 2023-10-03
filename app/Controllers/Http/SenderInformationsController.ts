import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import SenderInformation from "App/Models/SenderInformation";

export default class SenderInformationsController {
  public async index({ response }: HttpContextContract) {
    const senderLists = await SenderInformation.all();
    return response.status(200).send(senderLists);
  }

  public async store({}: HttpContextContract) {}

  public async show({ request, response }: HttpContextContract) {
    const { id } = request.params();
    try {
      const senderData = await SenderInformation.findByOrFail(
        "USR_NUMERO_IDENTIDAD",
        id
      );
      console.log(senderData);
      return response.status(200).json({
        data: senderData,
        message: { success: "Remitente Encontrado" },
      });
    } catch (err) {
      return response
        .status(200)
        .json({ data: null, message: { error: "Remitente no Encontrado" } });
    }
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}

  public async find({ request, response, params }: HttpContextContract) {
    const { doc_identidad, entidad, abreviatura, limit, page } = request.body();

    const data = await SenderInformation.query()
      .where("usr_numero_identidad", "like", `%${doc_identidad}%`)
      .orWhere("usr_nombre", "like", `%${entidad}%`);

    if (data.length > 0) {
      return response.status(200).send(data);
    } else {
      return response.json([]);
    }
  }
}
