import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "RAS_ASUNTO";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string("RAS_ID", 20).primary().comment("llave primaria");
      table.string("RAS_NOMBRE_ASUNTO", 250).notNullable();
      table.tinyint("RAS_TIEMPO_RESPUESTA").notNullable();
      table.string("RAS_UNIDAD", 10).notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
