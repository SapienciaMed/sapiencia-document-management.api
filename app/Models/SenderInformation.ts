import { DateTime } from "luxon";
import { BaseModel, column, computed } from "@ioc:Adonis/Lucid/Orm";

export default class SenderInformation extends BaseModel {
  public static table = "USR_DATOS_BASICOS";

  @column({ columnName: "DRA_CODIGO", isPrimary: true })
  public dra_codigo: number;

  @column({ columnName: "USR_TIPO_IDENTIDAD" })
  public usr_tipo_identidad: string;

  @column({ columnName: "USR_NUMERO_IDENTIDAD" })
  public usr_numero_identidad: string;

  @column({ columnName: "USR_NOMBRE" })
  public usr_nombre: string;

  @column({ columnName: "USR_APELLIDOS" })
  public usr_apellidos: string;

  @column({ columnName: "USR_EMAIL" })
  public usr_email: string;

  @column({ columnName: "USR_GENERO" })
  public usr_genero: number;

  @column({ columnName: "USR_NUMERO_CONTACTO" })
  public usr_numero_contacto: string;

  @column({ columnName: "USR_CELULAR" })
  public usr_celular: string;

  @column({ columnName: "USR_PAIS" })
  public usr_pais: string;

  @column({ columnName: "USR_DEPARTAMENTO" })
  public usr_departamento: number;

  @column({ columnName: "USR_MUNICIPIO" })
  public usr_municipio: number;

  @column({ columnName: "USR_BARRIO" })
  public usr_barrio: number;

  @column({ columnName: "USR_DIRECCION" })
  public usr_direccion: string;

  @column({ columnName: "USR_DEPENDENCIA" })
  public usr_dependencia: number;

  @column({ columnName: "USR_CARGO" })
  public usr_cargo: number;

  @computed()
  public get fullName() {
    return `${this.usr_nombre} ${this.usr_apellidos}`;
  }

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
