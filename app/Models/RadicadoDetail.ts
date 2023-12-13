import {
  BaseModel,
  HasMany,
  HasOne,
  column,
  hasMany,
  hasOne,
} from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";
import RelatedAnswer from "./RelatedAnswer";
import Entity from "./Entity";
import BasicDocumentInformation from "./BasicDocumentInformation";
import RecipientCopy from "./RecipientCopy";
import Subject from "./Subject";
import SubjectDocumentType from "./SubjectDocumentType";

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

  @column({ columnName: "DRA_TIPO_DOCUMENTO_RADICADO" })
  public dra_tipo_documento_radicado: string;

  @column({ columnName: "DRA_TIPO_RADICADO" })
  public dra_tipo_radicado: number;

  @column({ columnName: "DRA_RADICADO_ORIGEN" })
  public dra_radicado_origen: string;

  @column.date({
    columnName: "DRA_FECHA_ORIGEN",
    serialize: (value) => value.toFormat("dd/MM/yyyy"),
  })
  public dra_fecha_origen: DateTime;

  @column({ columnName: "DRA_RADICADO_POR" })
  public dra_radicado_por: string;

  @column({ columnName: "DRA_NOMBRE_RADICADOR" })
  public dra_nombre_radicador: string;

  @column({ columnName: "DRA_ID_REMITENTE" })
  public dra_id_remitente: string;

  @column({ columnName: "DRA_CODIGO_ASUNTO" })
  public dra_codigo_asunto: number;

  @column({ columnName: "DRA_TIPO_ASUNTO" })
  public dra_tipo_asunto: number;

  @column({ columnName: "DRA_PRIORIDAD_ASUNTO" })
  public dra_prioridad_asunto: number;

  @column({ columnName: "DRA_ID_DESTINATARIO" })
  public dra_id_destinatario: string;

  @column({ columnName: "DRA_OPCIONES_RESPUESTA" })
  public dra_opciones_respuesta: number;

  @column({ columnName: "DRA_REFERENCIA" })
  public dra_referencia: string;

  @column({ columnName: "DRA_OBSERVACION" })
  public dra_observacion: string;

  @column({ columnName: "DRA_NUM_ANEXOS" })
  public dra_num_anexos: number;

  @column({ columnName: "DRA_NUM_FOLIOS" })
  public dra_num_folios: number;

  @column({ columnName: "DRA_NUM_CAJAS" })
  public dra_num_cajas: number;

  @column({ columnName: "DRA_ESTADO_RADICADO" })
  public dra_estado_radicado: string;

  @column({ columnName: "DRA_MOVIMIENTO" })
  public dra_movimiento: string;

  @column({ columnName: "DRA_USUARIO" })
  public dra_usuario: string;

  @column({ columnName: "created_at" })
  public created_at: string;

  @column({ columnName: "updated_at" })
  public updated_at: string;


  //dra_estado no pertenece a la base de datos es computada en findById
  @column()
  public dra_estado: any;

  @hasMany(() => RelatedAnswer, {
    foreignKey: "rrr_id_radicado",
    localKey: "dra_radicado",
  })
  public rn_radicado_details_to_related_answer: HasMany<typeof RelatedAnswer>;

  @hasMany(() => RecipientCopy, {
    foreignKey: "rcd_radicado",
    localKey: "dra_radicado",
  })
  public rn_radicado_details_to_recipient_copy: HasMany<typeof RecipientCopy>;

  @hasOne(() => Entity, {
    localKey: "dra_id_remitente",
    foreignKey: "ent_numero_identidad",
  })
  public rn_radicado_remitente_to_entity: HasOne<typeof Entity>;

  @hasOne(() => Entity, {
    localKey: "dra_id_destinatario",
    foreignKey: "ent_numero_identidad",
  })
  public rn_radicado_destinatario_to_entity: HasOne<typeof Entity>;

  //Eliminar esta relacion
  @hasOne(() => BasicDocumentInformation, {
    localKey: "dra_codigo_asunto",
    foreignKey: "inf_codigo_asunto",
  })
  public rn_radicado_to_asunto: HasOne<typeof BasicDocumentInformation>;

  @hasOne(() => Subject, {
    localKey: "dra_codigo_asunto",
    foreignKey: "ras_id",
  })
  public rn_radicado_to_subject: HasOne<typeof Subject>;

  @hasOne(() => SubjectDocumentType, {
    localKey: "dra_tipo_asunto",
    foreignKey: "rta_id",
  })
  public rn_radicado_to_subjectDocument: HasOne<typeof SubjectDocumentType>;
}
