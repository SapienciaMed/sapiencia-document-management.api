import { DateTime } from "luxon";
import { BaseModel, HasOne, column, hasOne } from "@ioc:Adonis/Lucid/Orm";
import SubjectDocumentType from "./SubjectDocumentType";

export default class SubjectDocumentTypeRelation extends BaseModel {
  public static table = "ATD_ASUNTO_TIPO_DOCUMENTO";

  @column({ columnName: "ATD_ID", isPrimary: true })
  public atd_id: number;

  @column({ columnName: "ATD_ID_ASUNTO" })
  public atd_id_asunto: string;

  @column({ columnName: "ATD_ID_TIPO_DOCUMENTO" })
  public atd_id_tipo_documento: number;

  @column.dateTime({ columnName: "createdAt", autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({
    columnName: "updatedAt",
    autoCreate: true,
    autoUpdate: true,
  })
  public updatedAt: DateTime;

  // @hasOne(() => Subject, {
  //   localKey: "atd_id_asunto",
  //   foreignKey: "ras_id",
  // })
  // public rn_asunto: HasOne<typeof Subject>;

  @hasOne(() => SubjectDocumentType, {
    localKey: "atd_id_tipo_documento",
    foreignKey: "rta_id",
  })
  public rn_document_type: HasOne<typeof SubjectDocumentType>;
}
