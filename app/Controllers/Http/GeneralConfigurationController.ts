import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";
import GeneralConfigurationProvider from "@ioc:core.GeneralConfigurationProvider";
import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import GeneralConfiguration from "App/Models/GeneralConfiguration";
import { ApiResponse } from "App/Utils/ApiResponses";
import GeneralConfigurationValidator from "App/Validators/GeneralConfigurationValidator";

export default class GeneralConfigurationController {
  public async getGeneralConfiguration({ response }: HttpContextContract) {
    try {
      return response.send(
        await GeneralConfigurationProvider.getGeneralConfiguration()
      );
    } catch (err) {
      return response.badRequest(
        new ApiResponse(null, EResponseCodes.FAIL, String(err))
      );
    }
  }

  public async getGeneralConfigurationById({
    request,
    response,
  }: HttpContextContract) {
    try {
      const { id } = request.params();
      return response.send(
        await GeneralConfigurationProvider.getGeneralConfigurationById(id)
      );
    } catch (err) {
      return response.badRequest(
        new ApiResponse(null, EResponseCodes.FAIL, String(err))
      );
    }
  }

  public async createGeneralConfiguration({
    request,
    response,
  }: HttpContextContract) {
    await Database.transaction(async (trx) => {
      try {
        const data = await request.validate(GeneralConfigurationValidator);
        return response.send(
          await GeneralConfigurationProvider.createGeneralConfiguration(
            data,
            trx
          )
        );
      } catch (err) {
        await trx.rollback();
        return response.badRequest(
          new ApiResponse(null, EResponseCodes.FAIL, String(err))
        );
      }
    });
  }

  public async updateGeneralConfiguration({
    request,
    response,
  }: HttpContextContract) {
    await Database.transaction(async (trx) => {
      try {
        const { id } = request.params();
        const data = await request.validate(GeneralConfigurationValidator);
        return response.send(
          await GeneralConfigurationProvider.updateGeneralConfiguration(
            data,
            id,
            trx
          )
        );
      } catch (err) {
        await trx.rollback();
        return response.badRequest(
          new ApiResponse(null, EResponseCodes.FAIL, String(err))
        );
      }
    });
  }

  public async getRadicadoCode({ request, response }: HttpContextContract) {
    const { type } = request.params();
    try {
      const generalConfiguration = await GeneralConfiguration.findOrFail(1);

      switch (type) {
        case "recibido":
          return response.status(200).json({
            data: generalConfiguration.received,
            message: { success: "Radicado obtenido con éxito" },
          });
        case "interno":
          return response.status(200).json({
            data: generalConfiguration.internal,
            message: { success: "Radicado obtenido con éxito" },
          });
        case "externo":
          return response.status(200).json({
            data: generalConfiguration.external,
            message: { success: "Radicado obtenido con éxito" },
          });
        default:
          throw new Error("Tipo de Radicado incorrecto");
      }
    } catch (err) {
      return response
        .status(400)
        .json({ data: null, message: { error: err.message } });
    }
  }

  public async updateRadicadoCode({ request, response }: HttpContextContract) {
    await Database.transaction(async (trx) => {
      try {
        const { type } = request.params();
        const { id } = request.body();
        console.log(type, id, "generalConfiguration000");
        const generalConfiguration = await GeneralConfiguration.findOrFail(1);
        console.log(generalConfiguration.received, "generalConfiguration");

        switch (type) {
          case "recibido":
            if (id <= generalConfiguration.received) {
              throw new Error(
                "El número de radicado recibido no puede ser igual o menor al actual"
              );
            }
            generalConfiguration.received = id;
            break;
          case "interno":
            if (id <= generalConfiguration.internal) {
              throw new Error(
                "El número de radicado recibido no puede ser igual o menor al actual"
              );
            }
            generalConfiguration.internal = id;
            break;
          case "externo":
            if (id <= generalConfiguration.external) {
              throw new Error(
                "El número de radicado recibido no puede ser igual o menor al actual"
              );
            }
            generalConfiguration.external = id;
            break;
          default:
            throw new Error("Tipo de Radicado incorrecto");
        }

        await generalConfiguration.save();
        console.log(generalConfiguration.received, "generalConfiguration2");

        return response
          .status(200)
          .send(
            new ApiResponse(
              generalConfiguration,
              EResponseCodes.OK,
              `Consecutivo Actualizado`
            )
          );
      } catch (error) {
        console.log(error.message);
        await trx.rollback();
        return response
          .status(400)
          .send(new ApiResponse([], EResponseCodes.FAIL, error.message));
      }
    });
  }
}
