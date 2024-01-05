import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "CGE_CONFIGURACION_GENERAL";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.comment("Tabla maestro que contiene la probabilidad del riesgo");
      table.increments("CGE_CODIGO").primary().comment("Llave primaria");

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
        .bigint("CGE_DURACION_ALMUERZO")
        .notNullable()
        .comment("indica la hora de inicio del almuerzo formato 24 horas");

      table
        .bigint("CGE_TIEMPO")
        .notNullable()
        .comment("indica cuanto es el tiempo laboral numero de horas");

      table
        .bigint("CGE_HORA_ALMUERZO")
        .notNullable()
        .comment("indica la duracion del almuerzo");

      table.string("CGE_CORREO_ADMINISTRADOR", 45).notNullable().comment("");

      table.string("CGE_RUTAPDF_CREATOR", 255).notNullable().comment("");

      table.string("CGE_RUTA_TEMP_PDF", 255).notNullable().comment("");

      table
        .boolean("CGE_ACTIVAR_RANGO_IP")
        .nullable()
        .comment("booleano con posibles valores True o False.");

      table
        .boolean("CGE_COMPRIMIR_IMAGEN")
        .nullable()
        .comment("booleano con posibles valores True o False.");

      table.bigint("CGE_ANEXO").notNullable().comment("");
      table.bigint("CGE_CARTA").notNullable().comment("");
      table.bigint("CGE_EXPEDIENTE").notNullable().comment("");
      table.bigint("CGE_EXTERNO").notNullable().comment("");
      table.bigint("CGE_INTERNO").notNullable().comment("");
      table.bigint("CGE_NUMERO_RADICABLE").notNullable().comment("");
      table.bigint("CGE_NUMERO_RADICABLE_EXPED").notNullable().comment("");
      table.bigint("CGE_RECIBIDO").notNullable().comment("");
      table.bigint("CGE_SERIE").notNullable().comment("");
      table.bigint("CGE_REGISTRO_INVENTARIO").notNullable().comment("");
      table.bigint("CGE_DETALLE_REGINVENTARIO").notNullable().comment("");
      table
        .bigint("CGE_CAUSAL_DEVOLUCION_X_CONDICION")
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
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
