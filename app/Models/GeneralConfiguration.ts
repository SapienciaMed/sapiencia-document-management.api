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
      columnName: "CGE_DIAS_HABILES",
      serializeAs: "business_days",
      prepare: (val) => String(val) === "true" ? 1 : 0,
      serialize: (val) => Boolean(val)
  })
  public business_days: boolean;

  @column({ columnName: "CGE_DURACION_ALMUERZO", serializeAs: "lunch_duration" })
  public lunch_duration: string;


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

  @column({ columnName: "CGE_RADICADO_TEMPORAL", serializeAs: "temporary_settlement" })
  public temporary_settlement: boolean;

  @column({ columnName: "CGE_RADICADO_TEMPORAL_NORMA", serializeAs: "standard_temporary_filing" })
  public standard_temporary_filing: boolean;
}
