import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'radicado_details';

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.string('DRA_TIPO_DOCUMENTO_RADICADO');
    });
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('DRA_TIPO_DOCUMENTO_RADICADO');
    });
  }
}
