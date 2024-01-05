import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "inf_comentarios";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .increments("INF_CODIGO")
        .unsigned()
        .primary()
        .comment("llave primaria");
      table
        .string("INF_RADICADO", 20)
        .references("radicado_details.DRA_RADICADO")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
      table.string("INF_COMENTARIO").notNullable();
      table.timestamp("INF_FECHA_COMENTARIO").defaultTo(this.now());
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
