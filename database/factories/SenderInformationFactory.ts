import SenderInformation from "App/Models/SenderInformation";
import Factory from "@ioc:Adonis/Lucid/Factory";

export default Factory.define(SenderInformation, ({ faker }) => {
  return {
    //dra_codigo: parseInt(faker.random.numeric(2)),
    usr_tipo_identidad: "CC",
    usr_numero_identidad: faker.random.numeric(12),
    usr_nombre: faker.person.firstName(),
    usr_apellidos: faker.person.lastName(),
    usr_email: faker.internet.email(),
    usr_genero: faker.number.int({ min: 1, max: 2 }),
    usr_numero_contacto: faker.random.numeric(10),
    usr_celular: faker.random.numeric(10),
    usr_pais: faker.location.countryCode("alpha-3"),
    usr_departamento: parseInt(faker.random.numeric(2)),
    usr_municipio: parseInt(faker.random.numeric(2)),
    usr_barrio: parseInt(faker.random.numeric(2)),
    usr_direccion: faker.address.streetAddress(),
    usr_dependencia: faker.number.int({ min: 1, max: 2 }),
    usr_cargo: faker.number.int({ min: 1, max: 2 }),
  };
}).build();
