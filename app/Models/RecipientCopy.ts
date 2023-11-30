import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class RecipientCopy extends BaseModel {
  public static table = "RCD_RADICADO_COPIAS_DESTINATARIO";

  @column({ isPrimary: true, columnName: "RCD_CODIGO" })
  public rcd_codigo: number;

  @column({ columnName: "RCD_ID_DESTINATARIO" })
  public rcd_id_destinatario: string;

  @column({ columnName: "RCD_RADICADO" })
  public rcd_radicado: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
