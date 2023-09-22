import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";

export default class RadicadoDetail extends BaseModel {
  public static table = "radicado_details";

  @column({ columnName: "DRA_CODIGO", isPrimary: true })
  public dra_codigo: number;

  @column({ columnName: "DRA_RADICADO" })
  public dra_radicado: string;

  @column.date({
    columnName: "DRA_FECHA_RADICADO",
    serialize: (value) => value.toFormat("dd/MM/yyyy"),
  })
  public dra_fecha_radicado: DateTime;

  @column({ columnName: "DRA_RADICADO_ORIGEN" })
  public dra_radicado_origen: string;

  @column.date({
    columnName: "DRA_FECHA_ORIGEN",
    serialize: (value) => value.toFormat("dd/MM/yyyy"),
  })
  public dra_fecha_origen: DateTime;

  @column({ columnName: "DRA_NOMBRE_APELLIDOS" })
  public dra_nombre_apellidos: string;
}
