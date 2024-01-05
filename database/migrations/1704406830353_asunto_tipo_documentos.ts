import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "ATD_ASUNTO_TIPO_DOCUMENTO";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("ATD_ID").unsigned().primary().comment("llave primaria");
      table
        .string("ATD_ID_ASUNTO", 20)
        .references("RAS_ASUNTO.RAS_ID")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
      table
        .integer("ATD_ID_TIPO_DOCUMENTO")
        .unsigned()
        .references("RTA_TIPO_DOCUMENTOS.RTA_ID")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("createdAt").defaultTo(this.now());
      table.timestamp("updatedAt").defaultTo(this.now());
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
