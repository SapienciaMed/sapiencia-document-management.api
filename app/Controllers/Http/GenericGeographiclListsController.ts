// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";

export default class GenericGeographiclListsController {
  public async listAll({ response }: HttpContextContract) {
    const genericList = await Database.connection("general")
      .from("LGE_LISTADOS_GENERICOS")
      .select(
        "lge_agrupador",
        "lge_elemento_descripcion",
        "lge_elemento_codigo",
        "lge_campos_adicionales"
      )
      .where("lge_agrupador", "=", "PAISES")
      .orWhere("lge_agrupador", "=", "DEPARTAMENTOS")
      .orWhere("lge_agrupador", "=", "MUNICIPIOS");

    return response.status(200).send(genericList);
  }
}
