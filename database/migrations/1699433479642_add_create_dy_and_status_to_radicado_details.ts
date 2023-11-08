import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class AddEvacuationDatesToRadicadoDetails extends BaseSchema {
  protected tableName = 'radicado_details';

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.string('DRA_CREADO_POR').nullable();
      table.string('DRA_ESTADO').nullable();
    });
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('DRA_CREADO_POR');
      table.dropColumn('DRA_ESTADO');
    });
  }
}
