import { schema, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class MeasurementCapacityValidator {
  constructor(protected ctx: HttpContextContract) { }

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    id: schema.number.optional(),
    email_alarm: schema.boolean(),
    business_days: schema.boolean(),
    lunch_duration: schema.number(),
    start_without_image_internal: schema.boolean(),
    compress_image: schema.boolean(),
    ip_range: schema.boolean(),
    admin_email: schema.string(),
    lunch_time: schema.number(),
    time: schema.number(),
    anexo: schema.number(),
    letter: schema.number(),
    expedient: schema.number(),
    external: schema.number(),
    internal: schema.number(),
    radiable_number: schema.number(),
    filed_number_exped: schema.number(),
    received: schema.number(),
    series: schema.number(),
    inventory_record: schema.number(),
    inventory_record_detail: schema.number(),
    cause_of_return_x_condition: schema.number(),
    temporary_filing: schema.boolean(),
    temporary_filing_rules: schema.boolean(),
    route_creator_path: schema.string(),
    pdf_temporary_path: schema.string(),
  });

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {};
}
