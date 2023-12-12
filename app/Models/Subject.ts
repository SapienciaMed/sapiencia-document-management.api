import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Subject extends BaseModel {
  public static table = "RAS_ASUNTO";

  @column({ columnName: "RAS_ID", isPrimary: true })
  public ras_id: number;

  @column({ columnName: "RAS_NOMBRE_ASUNTO" })
  public ras_nombre_asunto: string;

  @column({ columnName: "RAS_TIEMPO_RESPUESTA" })
  public ras_tiempo_respuesta: number;

  @column({ columnName: "RAS_UNIDAD" })
  public ras_unidad: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
