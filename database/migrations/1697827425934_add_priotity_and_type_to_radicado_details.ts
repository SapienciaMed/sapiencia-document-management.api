import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'radicado_details';

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.string('DRA_PRIORIDAD');
      table.string('DRA_TIPO_INFO');
    });
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('DRA_PRIORIDAD');
      table.dropColumn('DRA_TIPO_INFO');
    });
  }
}
