import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class SubjectDocumentType extends BaseModel {
  public static table = "RTA_TIPO_DOCUMENTOS";

  @column({ columnName: "RTA_ID", isPrimary: true })
  public rta_id: number;

  @column({ columnName: "RTA_DESCRIPCION" })
  public rta_descripcion: string;
}
