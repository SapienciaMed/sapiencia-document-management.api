import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class AddEvacuationDatesToRadicadoDetails extends BaseSchema {
  protected tableName = 'radicado_details';

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.date('DRA_FECHA_EVACUACION_ENTRADA').nullable();
      table.date('DRA_FECHA_EVACUACION_SALIDA').nullable();
    });
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('DRA_FECHA_EVACUACION_ENTRADA');
      table.dropColumn('DRA_FECHA_EVACUACION_SALIDA');
    });
  }
}
