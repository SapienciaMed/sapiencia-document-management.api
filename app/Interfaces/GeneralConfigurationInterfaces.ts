export interface IGeneralConfiguration {
  id: number;
  email_alarm: boolean;
  business_days: boolean;
  lunch_duration: number;
  start_without_image_internal: boolean;
  compress_image: boolean;
  ip_range: boolean;
  admin_email: string;
  lunch_time: number;
  time: number;
  anexo: number;
  letter: number;
  expedient: number;
  external: number;
  internal: number;
  radiable_number: number;
  filed_number_exped: number;
  received: number;
  series: number;
  inventory_record: number;
  inventory_record_detail: number;
  cause_of_return_x_condition: number;
  temporary_filing: boolean;
  temporary_filing_rules: boolean;
  route_creator_path: string;
  pdf_temporary_path: string;
}

export interface IGeneralConfigurationTemp {
  id?: number;
  email_alarm: boolean;
  business_days: boolean;
  lunch_duration: number;
  start_without_image_internal: boolean;
  compress_image: boolean;
  ip_range: boolean;
  admin_email: string;
  lunch_time: number;
  time: number;
  anexo: number;
  letter: number;
  expedient: number;
  external: number;
  internal: number;
  radiable_number: number;
  filed_number_exped: number;
  received: number;
  series: number;
  inventory_record: number;
  inventory_record_detail: number;
  cause_of_return_x_condition: number;
  temporary_filing: boolean;
  temporary_filing_rules: boolean;
  route_creator_path: string;
  pdf_temporary_path: string;
}
