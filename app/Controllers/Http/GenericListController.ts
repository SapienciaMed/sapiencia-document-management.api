import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";
import GenericListProvider from "@ioc:core.GenericListProvider";
import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import { ApiResponse } from "App/Utils/ApiResponses";

export default class GenericListController {
  public async getGenericListByGrouper({
    request,
    response,
  }: HttpContextContract) {
    try {
      const { grouper } = request.params();
      return response.send(
        await GenericListProvider.getGenericListByGrouper(grouper)
      );
    } catch (err) {
      return response.badRequest(
        new ApiResponse(null, EResponseCodes.FAIL, String(err))
      );
    }
  }

  public async getTypesEntity({ response }: HttpContextContract) {
    const genericList = await Database.connection("general")
      .from("LGE_LISTADOS_GENERICOS")
      .select(
        "lge_agrupador",
        "lge_elemento_descripcion",
        "lge_elemento_codigo",
        "lge_campos_adicionales"
      )
      .where("lge_agrupador", "=", "TIPOS_ENTIDAD");

    return response.status(200).send(genericList);
  }
}
