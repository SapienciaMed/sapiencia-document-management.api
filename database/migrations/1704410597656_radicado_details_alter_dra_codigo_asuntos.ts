import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "radicado_details";

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .string("DRA_CODIGO_ASUNTO", 20)
        .references("RAS_ASUNTO.RAS_ID")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable()
        .alter();
    });
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .string("DRA_CODIGO_ASUNTO", 20)
        .references("RAS_ASUNTO.RAS_ID")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable()
        .alter();
    });
  }
}
