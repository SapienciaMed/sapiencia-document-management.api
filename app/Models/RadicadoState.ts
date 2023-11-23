import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class RadicadoState extends BaseModel {
  public static table = "ER_ESTADOS_RADICADOS";

  @column({ columnName: "ER_CODIGO", isPrimary: true })
  public er_codigo: number;

  @column({ columnName: "ER_RADICADO" })
  public er_radicado: string;

  @column.date({
    columnName: "ER_FECHA_RADICADO",
    serialize: (value) => value.toFormat("dd/MM/yyyy"),
  })
  public er_fecha_radicado: DateTime;

  @column({ columnName: "ER_TIPO_DOCUMENTO_RADICADO" })
  public er_tipo_documento_radicado: string;

  @column({ columnName: "ER_TIPO_RADICADO" })
  public er_tipo_radicado: number;

  @column({ columnName: "ER_RADICADO_ORIGEN" })
  public er_radicado_origen: string;

  @column({ columnName: "ER_RADICADO_POR" })
  public er_radicado_por: string;

  @column({ columnName: "ER_NOMBRE_RADICADOR" })
  public er_nombre_radicador: string;

  @column({ columnName: "ER_ID_REMITENTE" })
  public er_id_remitente: string;

  @column({ columnName: "ER_CODIGO_ASUNTO" })
  public er_codigo_asunto: number;

  @column({ columnName: "ER_TIPO_ASUNTO" })
  public er_tipo_asunto: number;

  @column({ columnName: "ER_PRIORIDAD_ASUNTO" })
  public er_prioridad_asunto: number;

  @column({ columnName: "ER_ID_DESTINATARIO" })
  public er_id_destinatario: string;

  @column({ columnName: "ER_OPCIONES_RESPUESTA" })
  public er_opciones_respuesta: number;

  @column({ columnName: "ER_REFERENCIA" })
  public er_referencia: string;

  @column({ columnName: "ER_OBSERVACION" })
  public er_observacion: string;

  @column({ columnName: "ER_NUM_ANEXOS" })
  public er_num_anexos: number;

  @column({ columnName: "ER_NUM_FOLIOS" })
  public er_num_folios: number;

  @column({ columnName: "ER_NUM_CAJAS" })
  public er_num_cajas: number;

  @column({ columnName: "ER_ESTADO_RADICADO" })
  public er_estado_radicado: string;

  @column({ columnName: "ER_MOVIMIENTO" })
  public er_movimiento: string;

  @column({ columnName: "ER_USUARIO" })
  public er_usuario: string;

  @column.date({
    columnName: "ER_FECHA_CAMBIO",
    serialize: (value) => value.toFormat("dd/MM/yyyy HH:mm:ss"),
  })
  public er_fecha_cambio: DateTime;
}
