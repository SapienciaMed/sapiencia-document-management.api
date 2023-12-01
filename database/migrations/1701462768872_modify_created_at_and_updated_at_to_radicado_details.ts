import BaseSchema from "@ioc:Adonis/Lucid/Schema";
import moment from "moment";

export default class UpdateRadicadoDetails extends BaseSchema {
  protected tableName = 'radicado_details';

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('created_at', 255).defaultTo(moment(new Date()).format('YYYY-DD-MM HH:mm:ss')).alter();
      table.string('updated_at', 255).defaultTo(moment(new Date()).format('YYYY-DD-MM HH:mm:ss')).alter();
    });
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('created_at', 255).defaultTo(moment(new Date()).format('YYYY-DD-MM HH:mm:ss')).alter();
      table.string('updated_at', 255).defaultTo(moment(new Date()).format('YYYY-DD-MM HH:mm:ss')).alter();
    });
  }
}
