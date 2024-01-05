import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import BasicDocumentInformationFactory from "Database/factories/BasicDocumentInformationFactory";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await BasicDocumentInformationFactory.createMany(0);
  }
}
