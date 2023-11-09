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

  public async searchByNamesAndCode({ request, response }: HttpContextContract) {
    const name = request.input('nombre');
    const last_name = request.input('apellido');
    const id = request.input('id');

    try {
      const query = RecipientInformation.query();

      if (name && last_name) {
        query.orWhereRaw(`CONCAT("USR_NOMBRE", " ", "USR_APELLIDOS") LIKE ?`, [`%${name} ${last_name}%`]);
      } else {
        if (name) {
          query.orWhere('USR_NOMBRE', 'LIKE', `%${name}%`);
        }

        if (last_name) {
          query.orWhere('USR_APELLIDOS', 'LIKE', `%${last_name}%`);
        }
      }

      if (id) {
        query.orWhere('USR_NUMERO_IDENTIDAD', 'LIKE', `%${id}%`);
      }

      const subjects = await query.select('*');

      return response.status(200).json({
        data: subjects,
        message: { success: "Petición terminada exitosamente" },
      });
    } catch (err) {
      console.log(err);
      return response
        .status(500)
        .json({ data: null, message: { error: "Ups, hubo un error" } });
    }
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
