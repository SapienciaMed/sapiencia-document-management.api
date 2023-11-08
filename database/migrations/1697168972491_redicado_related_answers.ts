import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "RRR_RESPUESTAS_RELACIONADAS";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .increments("RRR_CODIGO")
        .unsigned()
        .primary()
        .comment("llave primaria");
      table.string("RRR_ID_RADICADO", 20).notNullable();
      table.string("RRR_ID_RESPUESTAS_RELACIONADAS", 20).notNullable();

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at").defaultTo(this.now());
      table.timestamp("updated_at").defaultTo(this.now());
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
