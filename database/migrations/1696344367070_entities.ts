import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "ENT_ENTIDAD";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .increments("ENT_CODIGO")
        .unsigned()
        .primary()
        .comment("llave primaria");
      table.string("ENT_TIPO_DOCUMENTO", 4).notNullable();
      table.string("ENT_NUMERO_IDENTIDAD", 30).unique().notNullable();
      table.string("ENT_NOMBRES", 50).notNullable();
      table.string("ENT_APELLIDOS", 50).notNullable();
      table.string("ENT_RAZON_SOCIAL", 100).nullable();
      table.integer("ENT_TIPO_ENTIDAD").notNullable();
      //table.string("ENT_DESCRIPCION", 50).nullable();
      table.string("ENT_ABREVIATURA", 10).nullable();
      table.string("ENT_DIRECCION", 100).notNullable();
      table.string("ENT_EMAIL", 100).notNullable();
      table.string("ENT_CONTACTO_UNO", 20).nullable();
      table.string("ENT_CONTACTO_DOS", 20).nullable();
      table.string("ENT_OBSERVACIONES", 100).nullable();
      table.string("ENT_PAIS", 5).notNullable();
      table.integer("ENT_DEPARTAMENTO").notNullable();
      table.integer("ENT_MUNICIPIO").notNullable();
      table.boolean("ENT_ESTADO").defaultTo(1);

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at").defaultTo(this.now());
      table.timestamp("updated_at").defaultTo(this.now());
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
