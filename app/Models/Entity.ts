import { DateTime } from "luxon";
import { BaseModel, column, computed } from "@ioc:Adonis/Lucid/Orm";

export default class Entity extends BaseModel {
  public static table = "ENT_ENTIDAD";

  @column({ columnName: "ENT_CODIGO", isPrimary: true })
  public ent_codigo: number;

  @column({ columnName: "ENT_TIPO_DOCUMENTO" })
  public ent_tipo_documento: number;

  @column({ columnName: "ENT_NUMERO_IDENTIDAD" })
  public ent_numero_identidad: string;

  @column({ columnName: "ENT_NOMBRES" })
  public ent_nombres: string;

  @column({ columnName: "ENT_APELLIDOS" })
  public ent_apellidos: string;

  @column({ columnName: "ENT_TIPO_ENTIDAD" })
  public ent_tipo_entidad: number;

  @column({ columnName: "ENT_DESCRIPCION" })
  public ent_descripcion: string;

  @column({ columnName: "ENT_DIRECCION" })
  public ent_direccion: string;

  @column({ columnName: "ENT_EMAIL" })
  public ent_email: string;

  @column({ columnName: "ENT_CONTACTO_UNO" })
  public ent_contacto_uno: string;

  @column({ columnName: "ENT_CONTACTO_DOS" })
  public ent_contacto_dos: string;

  @column({ columnName: "ENT_OBSERVACIONES" })
  public ent_observaciones: string;

  @column({ columnName: "ENT_PAIS" })
  public ent_pais: number;

  @column({ columnName: "ENT_DEPARTAMENTO" })
  public ent_departamento: number;

  @column({ columnName: "ENT_MUNICIPIO" })
  public ent_municipio: number;

  @column({ columnName: "ENT_ESTADO" })
  public ent_estado: boolean;

  @column({ columnName: "ENT_ABREVIATURA" })
  public ent_abreviatura: string;

  @computed()
  public get fullName() {
    return `${this.ent_nombres} ${this.ent_apellidos}`;
  }

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
