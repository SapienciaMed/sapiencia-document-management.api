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
    dra_radicado_origen: faker.random.numeric(12),
    dra_fecha_origen: DateTime.fromISO(
      faker.date.past().toISOString()
    ).toFormat("yyyy-MM-dd HH:mm:ss"),
    dra_nombre_apellidos: faker.person.fullName(),
  };
}).build();

//DateTime.local().toFormat("yyyy-MM-dd HH:mm:ss")
