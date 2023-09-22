import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import GeneralConfiguration from "App/Models/GeneralConfiguration";

export default class extends BaseSeeder {
  public async run() {
    await GeneralConfiguration.createMany([
      {
        id: 1,
        email_alarm: true,
        business_days: true,
        lunch_duration: '13:30',
        lunch_time: 1,
        time: 1,
        anexo: 1,
        letter: 1,
        expedient: 1,
        external: 1,
        internal: 1,
        radiable_number: 1,
        filed_number_exped: 1,
        received: 1,
        series: 1,
        inventory_record: 1,
        inventory_record_detail: 1,
        temporary_settlement: true,
        standard_temporary_filing: true,
      },
    ]);
  }
}
