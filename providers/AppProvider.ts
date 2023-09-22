import type { ApplicationContract } from "@ioc:Adonis/Core/Application";

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public async register() {
    // Register your own bindings

    /**************************************************************************/
    /******************************** SERVICES ********************************/
    /**************************************************************************/
    const GenericListService = await import("App/Services/GenericListService");
    const GeneralConfigurationService = await import("App/Services/GeneralConfigurationService");

    /**************************************************************************/
    /************************ EXTERNAL SERVICES ********************************/
    /**************************************************************************/

    /**************************************************************************/
    /******************************** REPOSITORIES ****************************/
    /**************************************************************************/
    const GenericListRepository = await import(
      "App/Repositories/GenericListRepository"
    );
    const GeneralConfigurationRepository = await import(
      "App/Repositories/GeneralConfigurationRepository"
    );

    /**************************************************************************/
    /******************************** CORE  ***********************************/
    /**************************************************************************/

    this.app.container.singleton(
      "core.GenericListProvider",
      () => new GenericListService.default(new GenericListRepository.default())
    );

    this.app.container.singleton(
      "core.GeneralConfigurationProvider",
      () => new GeneralConfigurationService.default(
        new GeneralConfigurationRepository.default(),
      ),
    );
  }

  public async boot() {
    // IoC container is ready
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
