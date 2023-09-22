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
    lunch_duration: schema.string(),
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
    temporary_settlement: schema.boolean(),
    standard_temporary_filing: schema.boolean(),
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
