import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Entity from "App/Models/Entity";

export default class EntitiesController {
  public async index({ response }: HttpContextContract) {
    const senderLists = await Entity.all();
    return response.status(200).send(senderLists);
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const entity = new Entity();
      //const data = await request.validate(GeneralConfigurationValidator);
      entity.fill(request.all());
      await entity.save();

      return response.status(200).json({
        data: entity,
        message: { success: "Creación exitosa" },
      });
    } catch (err) {
      console.log(err.message);
      return response
        .status(500)
        .json({ data: null, message: { error: "Ups, hubo un error" } });
    }
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
        .status(500)
        .json({ data: null, message: { error: err.message } });
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const id = params.id;
      const entity = await Entity.findOrFail(id);
      //await entity.merge(request.all()).save();
      entity.fill(request.all());
      entity.save();
      return response
        .status(200)
        .json({ data: entity, message: { success: "Edición Exitosa" } });
    } catch (error) {
      return response
        .status(500)
        .json({ data: null, message: { error: error.message } });
    }
  }

  public async destroy({}: HttpContextContract) {}

  public async find({ request, response }: HttpContextContract) {
    const { doc_identidad, entidad, abreviatura } = request.body();

    const data = await Entity.query()
      .where("ent_numero_identidad", "like", `%${doc_identidad}%`)
      .orWhere("ent_nombres", "like", `%${entidad}%`)
      .orWhere("ent_apellidos", "like", `%${entidad}%`)
      .orWhere("ent_razon_social", "like", `%${entidad}%`)
      .orWhere("ent_abreviatura", "like", `%${abreviatura}%`);

    if (data.length > 0) {
      return response.status(200).send(data);
    } else {
      return response.json([]);
    }
  }

  public async search({ request, response }: HttpContextContract) {
    const ent_tipo_documento = request.input('ent_tipo_documento');
    const ent_numero_identidad = request.input('ent_numero_identidad');
    const ent_nombres = request.input('ent_nombres');

    try {
      const query = Entity.query();

      if (ent_tipo_documento) {
        query.andWhere('ENT_TIPO_DOCUMENTO', 'LIKE', `%${ent_tipo_documento}%`);
      }

      if (ent_numero_identidad) {
        query.andWhere('ENT_NUMERO_IDENTIDAD', 'LIKE', `%${ent_numero_identidad}%`);
      }

      if (ent_nombres) {
        let field = 'ENT_NOMBRES';
        if (ent_tipo_documento == "NIT") {
          field = 'ENT_RAZON_SOCIAL';
        }

        query.andWhere(field, 'LIKE', `%${ent_nombres}%`);
      }

      const data = await query.select('*');

      return response.status(200).json({
        data,
        message: { success: "Peticion terminada exitosamente" },
      });
    } catch (err) {
      console.log(err)
      return response
        .status(500)
        .json({ data: null, message: { error: "Ups, hubo un error" } });
    }
  }
}
