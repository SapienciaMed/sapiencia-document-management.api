import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Comment extends BaseModel {
  public static table = "INF_COMENTARIOS";

  @column({ columnName: "INF_CODIGO", isPrimary: true })
  public inf_codigo: number;

  @column({ columnName: "INF_RADICADO" })
  public inf_radicado: string;

  @column({ columnName: "INF_COMENTARIO" })
  public inf_comentario: string;

  @column.dateTime({ columnName: "INF_FECHA_COMENTARIO", autoCreate: true })
  public inf_fecha_comentario: DateTime;

  // @column.dateTime({ autoCreate: true })
  // public createdAt: DateTime;

  // @column.dateTime({ autoCreate: true, autoUpdate: true })
  // public updatedAt: DateTime;
}
