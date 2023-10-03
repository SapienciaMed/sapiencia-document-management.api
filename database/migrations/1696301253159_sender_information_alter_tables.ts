import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "USR_DATOS_BASICOS";

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string("USR_ABREVIATURA", 10).nullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
