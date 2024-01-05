import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "radicado_details";

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .integer("DRA_TIPO_ASUNTO")
        .unsigned()
        .references("RTA_ID")
        .inTable("RTA_TIPO_DOCUMENTOS")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable()
        .alter();
    });
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .integer("DRA_TIPO_ASUNTO")
        .unsigned()
        .references("RTA_ID")
        .inTable("RTA_TIPO_DOCUMENTOS")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable()
        .alter();
    });
  }
}
