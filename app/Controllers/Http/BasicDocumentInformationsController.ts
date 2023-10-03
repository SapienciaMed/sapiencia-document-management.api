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

  public async searchByNameAndCode({ request, response }: HttpContextContract) {
    const name = request.input('name');
    const code = request.input('code');

    try {
      const query = BasicDocumentInformation.query();

      if (name) {
        query.orWhere('INF_NOMBRE_ASUNTO', 'LIKE', `%${name}%`);
      }

      if (code) {
        query.orWhere('INF_CODIGO_ASUNTO', 'LIKE', `%${code}%`);
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
