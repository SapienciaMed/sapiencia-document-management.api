import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { EResponseCodes } from "App/Constants/ResponseCodesEnum";
import Comment from "App/Models/Comment";
import { ApiResponse } from "App/Utils/ApiResponses";

export default class CommentsController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    try {
      const comment = new Comment();
      //const data = await request.validate(GeneralConfigurationValidator);
      comment.fill(request.all());
      await comment.save();

      return response
        .status(200)
        .send(
          new ApiResponse(comment, EResponseCodes.OK, "Comentario Guardado")
        );
    } catch (err) {
      console.log(err.message);
      return response
        .status(500)
        .send(new ApiResponse([], EResponseCodes.FAIL, err.message));
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
