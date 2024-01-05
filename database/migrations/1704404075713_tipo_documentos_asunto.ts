import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "RTA_TIPO_DOCUMENTOS";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("RTA_ID").unsigned().primary().comment("llave primaria");
      table.string("RTA_DESCRIPCION", 100).notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
