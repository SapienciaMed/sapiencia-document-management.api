import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'ARA_ADJUNTOS_RADICADOS'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table
      .increments("ARA_CODIGO").primary()
      .comment("llave primaria");

      table.string("ARA_RADICADO", 20).notNullable();
      table.string("ARA_PATH", 255).notNullable();
      table.timestamp("created_at").defaultTo(this.now());
      table.timestamp("updated_at").defaultTo(this.now());
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
