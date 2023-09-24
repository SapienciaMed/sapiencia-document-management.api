import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import GeneralConfiguration from "App/Models/GeneralConfiguration";

export default class extends BaseSeeder {
  public async run() {
    await GeneralConfiguration.createMany([
      {
        id: 1,
        email_alarm: true,
        business_days: true,
        lunch_duration: 1,
        start_without_image_internal: true,
        compress_image: true,
        ip_range: true,
        admin_email: 'admin@email.com',
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
        route_creator_path: 'C:/test',
        pdf_temporary_path: 'C:/test',
        cause_of_return_x_condition: 1,
        temporary_filing: true,
        temporary_filing_rules: true,
      },
    ]);
  }
}
