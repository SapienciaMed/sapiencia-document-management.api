import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import RecipientInformation from "App/Models/RecipientInformation";
import Database from "@ioc:Adonis/Lucid/Database";
export default class RecipientInformationsController {
  public async index({ response }: HttpContextContract) {
    const senderLists = await RecipientInformation.all();
    return response.status(200).send(senderLists);
  }

  public async store({}: HttpContextContract) {}

  public async show({ request, response }: HttpContextContract) {
    const { id } = request.params();

    try {

      const senderData = await Database.connection("authentication")
      .from("USR_USUARIOS")
      .where('USR_NUMERO_DOCUMENTO', '=', id)
      .select('*');

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
      const query = Database.connection("authentication")
      .from("USR_USUARIOS");

      if (name) {
        query.orWhere('USR_NOMBRES', 'LIKE', `%${name}%`);
      }

      if (last_name) {
        query.orWhere('USR_APELLIDOS', 'LIKE', `%${last_name}%`);
      }

      if (id) {
        query.orWhere('USR_NUMERO_DOCUMENTO', 'LIKE', `%${id}%`);
      }

      const subjects = await query.select('*');

      return response.status(200).json({
        data: subjects,
        message: { success: "Peticion terminada exitosamente" },
      });
    } catch (err) {
      console.log(err)
      return response
        .status(500)
        .json({ data: null, message: { error: "Ups, hubo un error" } });
    }
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
