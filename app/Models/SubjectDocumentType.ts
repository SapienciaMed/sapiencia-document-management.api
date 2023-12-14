import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class SubjectDocumentType extends BaseModel {
  public static table = "RTA_TIPO_DOCUMENTOS";

  @column({ columnName: "RTA_ID", isPrimary: true })
  public rta_id: number;

  @column({ columnName: "RTA_DESCRIPCION" })
  public rta_descripcion: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
