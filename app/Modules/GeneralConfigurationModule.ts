declare module "@ioc:core.GeneralConfigurationProvider" {
  import { IGeneralConfigurationService } from "App/Services/GeneralConfigurationService";

  const GeneralConfigurationProvider: IGeneralConfigurationService;
  export default GeneralConfigurationProvider;
}
