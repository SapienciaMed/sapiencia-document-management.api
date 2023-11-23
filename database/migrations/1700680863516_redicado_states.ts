import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "ER_ESTADOS_RADICADOS";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .increments("ER_CODIGO")
        .unsigned()
        .primary()
        .comment("llave primaria");
      table.string("ER_RADICADO", 20).unique().notNullable();
      table.date("ER_FECHA_RADICADO").notNullable();
      table.smallint("ER_TIPO_RADICADO").unsigned().notNullable();
      table.string("ER_RADICADO_ORIGEN", 20).notNullable();
      table
        .string("ER_RADICADO_POR", 30)
        .notNullable()
        .comment("codigo usuario que crea el radicado");
      table.string("ER_NOMBRE_RADICADOR", 100).notNullable();
      table.string("ER_ID_REMITENTE", 30).notNullable();
      table.integer("ER_CODIGO_ASUNTO").unsigned().notNullable();
      table.integer("ER_TIPO_ASUNTO").unsigned().notNullable();
      table.integer("ER_PRIORIDAD_ASUNTO").unsigned().notNullable();
      table.string("ER_ID_DESTINATARIO", 30).notNullable();
      table.integer("ER_OPCIONES_RESPUESTA").unsigned().notNullable();
      table.text("ER_REFERENCIA").nullable();
      table.text("ER_OBSERVACION").nullable();
      table.integer("ER_NUM_ANEXOS").unsigned().notNullable();
      table.integer("ER_NUM_FOLIOS").unsigned().nullable();
      table.integer("ER_NUM_CAJAS").unsigned().notNullable();
      table
        .string("ER_ESTADO_RADICADO", 15)
        .notNullable()
        .comment("Evacuado o Pendiente");
      table
        .string("ER_MOVIMIENTO", 15)
        .notNullable()
        .comment("Asignado o Devuelto");
      table
        .string("ER_USUARIO", 30)
        .notNullable()
        .comment("codigo usuario que modifica el radicado");
      table.timestamp("ER_FECHA_CAMBIO").defaultTo(this.now());
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
