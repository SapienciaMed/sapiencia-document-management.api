import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "USR_DATOS_BASICOS";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .increments("DRA_CODIGO")
        .unsigned()
        .primary()
        .comment("llave primaria");
      table.integer("USR_TIPO_IDENTIDAD").notNullable();
      table.string("USR_NUMERO_IDENTIDAD", 30).unique().notNullable();
      table.string("USR_NOMBRE", 50).notNullable();
      table.string("USR_APELLIDOS", 50).notNullable();
      table.string("USR_EMAIL", 70).notNullable();
      table.integer("USR_GENERO").notNullable();
      table.string("USR_NUMERO_CONTACTO", 20).notNullable();
      table.string("USR_CELULAR", 20).notNullable();
      table.integer("USR_PAIS").notNullable();
      table.integer("USR_DEPARTAMENTO").notNullable();
      table.integer("USR_MUNICIPIO").notNullable();
      table.integer("USR_BARRIO").notNullable();
      table.string("USR_DIRECCION", 100).notNullable();
      table.integer("USR_DEPENDENCIA").notNullable();
      table.integer("USR_CARGO").notNullable();

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
