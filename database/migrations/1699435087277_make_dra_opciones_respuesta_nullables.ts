import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class AddEvacuationDatesToRadicadoDetails extends BaseSchema {
  protected tableName = 'radicado_details';

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('DRA_OPCIONES_RESPUESTA').unsigned().nullable().alter();
    });
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('DRA_OPCIONES_RESPUESTA').unsigned().notNullable().alter();
    });
  }
}
