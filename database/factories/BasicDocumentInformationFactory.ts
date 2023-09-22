import BasicDocumentInformation from "App/Models/BasicDocumentInformation";
import Factory from "@ioc:Adonis/Lucid/Factory";

export default Factory.define(BasicDocumentInformation, ({ faker }) => {
  return {
    //inf_codigo: parseInt(faker.random.numeric(2)),
    inf_codigo_asunto: faker.number.int(15),
    inf_nombre_asunto: faker.word.words(2),
    inf_unidad: faker.word.words(1),
    inf_timepo_respuesta: faker.word.words(1),
    inf_tipo: faker.number.int({ min: 1, max: 3 }),
    inf_prioridad: faker.number.int({ min: 1, max: 3 }),
  };
}).build();
