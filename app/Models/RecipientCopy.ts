import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class RecipientCopy extends BaseModel {
  public static table = "RCD_RADICADO_COPIAS_DESTINATARIO";

  @column({ isPrimary: true })
  public RCD_CODIGO: number;

  @column()
  public RCD_ID_DESTINATARIO: string;

  @column()
  public RCD_RADICADO: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
