import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class BasicDocumentInformation extends BaseModel {
  public static table = "INF_INFORMACION_BASICA";

  @column({ columnName: "INF_CODIGO", isPrimary: true })
  public inf_codigo: number;

  @column({ columnName: "INF_CODIGO_ASUNTO" })
  public inf_codigo_asunto: number;

  @column({ columnName: "INF_NOMBRE_ASUNTO" })
  public inf_nombre_asunto: string;

  @column({ columnName: "INF_UNIDAD" })
  public inf_unidad: string;

  @column({ columnName: "INF_TIMEPO_RESPUESTA" })
  public inf_timepo_respuesta: string;

  @column({ columnName: "INF_TIPO" })
  public inf_tipo: number;

  @column({ columnName: "INF_PRIORIDAD" })
  public inf_prioridad: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
