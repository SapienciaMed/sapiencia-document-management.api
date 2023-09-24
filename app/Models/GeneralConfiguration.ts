import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class GeneralConfiguration extends BaseModel {

  public static table = "CGE_CONFIGURACION_GENERAL";

  @column({ isPrimary: true, columnName: "CGE_CODIGO", serializeAs: "id" })
  public id: number;


  @column({
      columnName: "CGE_ALARMA_CORREO",
      serializeAs: "email_alarm",
      prepare: (val) => String(val) === "true" ? 1 : 0,
      serialize: (val) => Boolean(val)
  })
  public email_alarm: boolean;

  @column({
      columnName: "CGE_COMPRIMIR_IMAGEN",
      serializeAs: "compress_image",
      prepare: (val) => String(val) === "true" ? 1 : 0,
      serialize: (val) => Boolean(val)
  })
  public compress_image: boolean;

  @column({
      columnName: "CGE_ACTIVAR_RANGO_IP",
      serializeAs: "ip_range",
      prepare: (val) => String(val) === "true" ? 1 : 0,
      serialize: (val) => Boolean(val)
  })
  public ip_range: boolean;

  @column({
      columnName: "CGE_DIAS_HABILES",
      serializeAs: "business_days",
      prepare: (val) => String(val) === "true" ? 1 : 0,
      serialize: (val) => Boolean(val)
  })
  public business_days: boolean;

  @column({
      columnName: "CGE_INICIAR_SIN_IMAGEN_INTERNO",
      serializeAs: "start_without_image_internal",
      prepare: (val) => String(val) === "true" ? 1 : 0,
      serialize: (val) => Boolean(val)
  })
  public start_without_image_internal: boolean;

  @column({ columnName: "CGE_DURACION_ALMUERZO", serializeAs: "lunch_duration" })
  public lunch_duration: number;

  @column({ columnName: "CGE_CORREO_ADMINISTRADOR", serializeAs: "admin_email" })
  public admin_email: string;

  @column({ columnName: "CGE_RUTAPDF_CREATOR", serializeAs: "route_creator_path" })
  public route_creator_path: string;

  @column({ columnName: "CGE_RUTA_TEMP_PDF", serializeAs: "pdf_temporary_path" })
  public pdf_temporary_path: string;


  @column({ columnName: "CGE_TIEMPO", serializeAs: "time" })
  public time: number;

  @column({ columnName: "CGE_HORA_ALMUERZO", serializeAs: "lunch_time" })
  public lunch_time: number;

  @column({ columnName: "CGE_ANEXO", serializeAs: "anexo" })
  public anexo: number;

  @column({ columnName: "CGE_CARTA", serializeAs: "letter" })
  public letter: number;

  @column({ columnName: "CGE_EXPEDIENTE", serializeAs: "expedient" })
  public expedient: number;

  @column({ columnName: "CGE_EXTERNO", serializeAs: "external" })
  public external: number;

  @column({ columnName: "CGE_INTERNO", serializeAs: "internal" })
  public internal: number;

  @column({ columnName: "CGE_NUMERO_RADICABLE", serializeAs: "radiable_number" })
  public radiable_number: number;

  @column({ columnName: "CGE_NUMERO_RADICABLE_EXPED", serializeAs: "filed_number_exped" })
  public filed_number_exped: number;

  @column({ columnName: "CGE_RECIBIDO", serializeAs: "received" })
  public received: number;

  @column({ columnName: "CGE_SERIE", serializeAs: "series" })
  public series: number;

  @column({ columnName: "CGE_REGISTRO_INVENTARIO", serializeAs: "inventory_record" })
  public inventory_record: number;

  @column({ columnName: "CGE_DETALLE_REGINVENTARIO", serializeAs: "inventory_record_detail" })
  public inventory_record_detail: number;

  @column({ columnName: "CGE_RADICADO_TEMPORAL", serializeAs: "temporary_filing" })
  public temporary_filing: boolean;

  @column({ columnName: "CGE_RADICADO_TEMPORAL_NORMA", serializeAs: "temporary_filing_rules" })
  public temporary_filing_rules: boolean;

  @column({ columnName: "CGE_CAUSAL_DEVOLUCION_X_CONDICION", serializeAs: "cause_of_return_x_condition" })
  public cause_of_return_x_condition: number;
}
