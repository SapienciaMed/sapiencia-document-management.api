import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "radicado_details";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .increments("DRA_CODIGO")
        .unsigned()
        .primary()
        .comment("llave primaria");
      table.string("DRA_RADICADO", 20).unique().notNullable();
      table.date("DRA_FECHA_RADICADO").notNullable();
      table.smallint("DRA_TIPO_RADICADO").unsigned().notNullable();
      table.string("DRA_RADICADO_ORIGEN", 20).notNullable();
      table
        .string("DRA_RADICADO_POR", 30)
        .notNullable()
        .comment("codigo usuario que crea el radicado");
      table.string("DRA_NOMBRE_RADICADOR", 100).notNullable();
      table.string("DRA_ID_REMITENTE", 30).notNullable();
      table.string("DRA_CODIGO_ASUNTO", 20).references("RAS_ASUNTO.RAS_ID").notNullable();
      table.integer("DRA_TIPO_ASUNTO").unsigned().references("RTA_TIPO_DOCUMENTOS.RTA_ID").notNullable();
      table.integer("DRA_PRIORIDAD_ASUNTO").unsigned().notNullable();
      table.string("DRA_ID_DESTINATARIO", 30).notNullable();
      table.integer("DRA_OPCIONES_RESPUESTA").unsigned().notNullable();
      table.text("DRA_REFERENCIA").nullable();
      table.text("DRA_OBSERVACION").nullable();
      table.integer("DRA_NUM_ANEXOS").unsigned().notNullable();
      table.integer("DRA_NUM_FOLIOS").unsigned().nullable();
      table.integer("DRA_NUM_CAJAS").unsigned().notNullable();
      table
        .string("DRA_ESTADO_RADICADO", 15)
        .notNullable()
        .comment("Evacuado o Pendiente");
      table
        .string("DRA_MOVIMIENTO", 15)
        .notNullable()
        .comment("Asignado o Devuelto");
      table
        .string("DRA_USUARIO", 30)
        .nullable()
        .comment("codigo usuario que modifica el radicado");
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
