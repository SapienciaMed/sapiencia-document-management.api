import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'attachments_radicados'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table
      .increments("ARA_CODIGO")
      .unsigned()
      .primary()
      .comment("llave primaria");

      table.string("ARA_RADICADO", 20).notNullable();
      table
          .foreign("ARA_RADICADO", "fk_rrr_idRadicado_to_dra_radicado")
          .references("DRA_RADICADO")
          .inTable("radicado_details")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");


      table.string("ARA_PATH", 255).notNullable();
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
