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

      table
        .foreign("RRR_ID_RADICADO", "fk_rrr_idRadicado_to_dra_radicado")
        .references("DRA_RADICADO")
        .inTable("radicado_details")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .foreign(
          "RRR_ID_RESPUESTAS_RELACIONADAS",
          "fk_rrr_relatedAnswer_to_dra_radicado"
        )
        .references("DRA_RADICADO")
        .inTable("radicado_details")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
