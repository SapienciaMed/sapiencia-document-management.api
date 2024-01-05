import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import SenderInformationFactory from "Database/factories/SenderInformationFactory";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await SenderInformationFactory.createMany(0);
  }
}
