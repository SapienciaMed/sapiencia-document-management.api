import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "RCD_RADICADO_COPIAS_DESTINATARIO";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .increments("RCD_CODIGO")
        .unsigned()
        .primary()
        .comment("llave primaria");
      table
        .string("RCD_ID_DESTINATARIO", 20)
        .references("ENT_NUMERO_IDENTIDAD")
        .inTable("ent_entidad")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
      table
        .string("RCD_RADICADO", 20)
        .references("DRA_RADICADO")
        .inTable("radicado_details")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();

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
