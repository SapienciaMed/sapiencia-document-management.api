import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Entity from "App/Models/Entity";

export default class EntitiesController {
  public async index({ response }: HttpContextContract) {
    const senderLists = await Entity.all();
    return response.status(200).send(senderLists);
  }

  public async store({ request, response }: HttpContextContract) {
    const entity = new Entity();

    //const data = await request.validate(GeneralConfigurationValidator);
    entity.fill(request.all());
    await entity.save();

    return response.status(200).json({
      data: entity,
      message: { success: "Entidad Registrada" },
    });
  }

  public async show({ request, response }: HttpContextContract) {
    const { id } = request.params();
    try {
      const entityData = await Entity.findBy("ENT_NUMERO_IDENTIDAD", id);

      if (!entityData) {
        return response.status(200).json({
          data: null,
          message: { error: "Entidad no Encontrada" },
        });
      }
      return response.status(200).json({
        data: entityData,
        message: { success: "Entidad Encontrada" },
      });
    } catch (err) {
      return response
        .status(400)
        .json({ data: null, message: { error: err.message } });
    }
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
