import RadicadoDetail from "App/Models/RadicadoDetail";
import Factory from "@ioc:Adonis/Lucid/Factory";
import { DateTime } from "luxon";

export default Factory.define(RadicadoDetail, ({ faker }): any => {
  return {
    //dra_codigo: parseInt(faker.random.numeric(2)),
    dra_radicado: faker.random.numeric(12),
    dra_fecha_radicado: DateTime.fromISO(
      faker.date.past().toISOString()
    ).toFormat("yyyy-MM-dd HH:mm:ss"),
    dra_tipo_radicado: 1,
    dra_radicado_origen: faker.random.numeric(12),
    dra_radicado_por: faker.random.numeric(12),
    dra_nombre_radicador: faker.person.fullName(),
    dra_id_remitente: faker.random.numeric(12),
    dra_codigo_asunto: 1,
    dra_opciones_respuesta: 1,
    dra_id_destinatario: faker.random.numeric(12),
    dra_referencia: faker.string.alpha(12),
    dra_observacion: faker.string.alpha(12),
    dra_num_anexos: 0,
    dra_num_folios: 0,
    dra_num_cajas: 0,
  };
}).build();

//DateTime.local().toFormat("yyyy-MM-dd HH:mm:ss")
