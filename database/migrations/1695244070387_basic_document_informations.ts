import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "INF_INFORMACION_BASICA";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .increments("INF_CODIGO")
        .unsigned()
        .primary()
        .comment("llave primaria");

      table
        .integer("INF_CODIGO_ASUNTO")
        .unique()
        .notNullable()
        .unsigned()
        .comment("Código identificador del asunto");

      table
        .string("INF_NOMBRE_ASUNTO", 50)
        .notNullable()
        .comment("Nombre del asunto");

      table
        .string("INF_UNIDAD", 10)
        .notNullable()
        .comment("nemotecnico de la unida de medida");

      table
        .string("INF_TIMEPO_RESPUESTA", 20)
        .notNullable()
        .comment("configuracion del tiempo de respuesta");

      table
        .integer("INF_TIPO")
        .notNullable()
        .comment("valor que se carga de la tabla maestro");

      table
        .integer("INF_PRIORIDAD")
        .notNullable()
        .comment("valor que se carga de la tabla maestro");

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: false });
      table.timestamp("updated_at", { useTz: false });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
