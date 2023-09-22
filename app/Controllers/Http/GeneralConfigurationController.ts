import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";
import GeneralConfigurationProvider from "@ioc:core.GeneralConfigurationProvider";
import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import { ApiResponse } from "App/Utils/ApiResponses";
import GeneralConfigurationValidator from "App/Validators/GeneralConfigurationValidator";

export default class GeneralConfigurationController {
  public async getGeneralConfiguration({ response }: HttpContextContract) {
    try {
      return response.send(await GeneralConfigurationProvider.getGeneralConfiguration());
    } catch (err) {
      return response.badRequest(
        new ApiResponse(null, EResponseCodes.FAIL, String(err))
      );
    }
  }

  public async getGeneralConfigurationById({ request, response }: HttpContextContract) {
    try {
      const { id } = request.params();
      return response.send(await GeneralConfigurationProvider.getGeneralConfigurationById(id));
    } catch (err) {
      return response.badRequest(
        new ApiResponse(null, EResponseCodes.FAIL, String(err))
      );
    }
  }

  public async createGeneralConfiguration({ request, response }: HttpContextContract) {
    await Database.transaction(async (trx) => {
      try {
        const data = await request.validate(GeneralConfigurationValidator);
        return response.send(
          await GeneralConfigurationProvider.createGeneralConfiguration(data, trx)
        );
      } catch (err) {
        await trx.rollback();
        return response.badRequest(
          new ApiResponse(null, EResponseCodes.FAIL, String(err))
        );
      }
    });
  }

  public async updateGeneralConfiguration({ request, response }: HttpContextContract) {
    await Database.transaction(async (trx) => {
      try {
        const { id } = request.params();
        const data = await request.validate(GeneralConfigurationValidator);
        return response.send(
          await GeneralConfigurationProvider.updateGeneralConfiguration(data, id, trx)
        );
      } catch (err) {
        await trx.rollback();
        return response.badRequest(
          new ApiResponse(null, EResponseCodes.FAIL, String(err))
        );
      }
    });
  }
}
