import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'CGE_CONFIGURACION_GENERAL'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.comment("Tabla maestro que contiene la probabilidad del riesgo");
      table.increments("CGE_CODIGO")
      .primary()
      .comment("Llave primaria");

      table
      .boolean("CGE_ALARMA_CORREO")
      .nullable()
      .comment("booleano con posibles valores True o False.");

      table
      .boolean("CGE_INICIAR_SIN_IMAGEN_INTERNO")
      .nullable()
      .comment("booleano con posibles valores True o False.");

      table
      .boolean("CGE_DIAS_HABILES")
      .notNullable()
      .comment("configuracion para el reporte de dias habiles");

      table
      .integer("CGE_DURACION_ALMUERZO", 20)
      .notNullable()
      .comment("indica la hora de inicio del almuerzo formato 24 horas");

      table
      .integer("CGE_TIEMPO", 20)
      .notNullable()
      .comment("indica cuanto es el tiempo laboral numero de horas");

      table
      .integer("CGE_HORA_ALMUERZO", 20)
      .notNullable()
      .comment("indica la duracion del almuerso");

      table
      .string("CGE_CORREO_ADMINISTRADOR", 45)
      .notNullable()
      .comment("");

      table
      .string("CGE_RUTAPDF_CREATOR", 255)
      .notNullable()
      .comment("");

      table
      .string("CGE_RUTA_TEMP_PDF", 255)
      .notNullable()
      .comment("");

      table
      .boolean("CGE_ACTIVAR_RANGO_IP")
      .nullable()
      .comment("booleano con posibles valores True o False.");

      table
      .boolean("CGE_COMPRIMIR_IMAGEN")
      .nullable()
      .comment("booleano con posibles valores True o False.");

      table
      .integer("CGE_ANEXO", 20)
      .notNullable()
      .comment("");

      table
      .integer("CGE_CARTA", 20)
      .notNullable()
      .comment("");

      table
      .integer("CGE_EXPEDIENTE", 20)
      .notNullable()
      .comment("");

      table
      .integer("CGE_EXTERNO", 20)
      .notNullable()
      .comment("");

      table
      .integer("CGE_INTERNO", 20)
      .notNullable()
      .comment("");

      table
      .integer("CGE_NUMERO_RADICABLE", 20)
      .notNullable()
      .comment("");

      table
      .integer("CGE_NUMERO_RADICABLE_EXPED", 20)
      .notNullable()
      .comment("");

      table
      .integer("CGE_RECIBIDO", 20)
      .notNullable()
      .comment("");

      table
      .integer("CGE_SERIE", 20)
      .notNullable()
      .comment("");

      table
      .integer("CGE_REGISTRO_INVENTARIO", 20)
      .notNullable()
      .comment("");

      table
      .integer("CGE_DETALLE_REGINVENTARIO", 20)
      .notNullable()
      .comment("");

      table
      .integer("CGE_CAUSAL_DEVOLUCION_X_CONDICION", 20)
      .notNullable()
      .comment("");

      table
      .boolean("CGE_RADICADO_TEMPORAL")
      .nullable()
      .comment("booleano con posibles valores True o False.");

      table
      .boolean("CGE_RADICADO_TEMPORAL_NORMA")
      .nullable()
      .comment("booleano con posibles valores True o False.");


    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
