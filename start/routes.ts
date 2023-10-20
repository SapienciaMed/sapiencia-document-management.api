/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return "Api de servicios Gestion Ducumental de SAPIENCIA";
});

Route.group(() => {
  Route.get(
    "/get-by-grouper/:grouper",
    "GenericListController.getGenericListByGrouper"
  );
  Route.get(
    "/get-by-parent",
    "GenericListController.getGenericListByAdditionalField"
  );
  Route.get(
    "/get-by-groupers",
    "GenericListController.getGenericListByGroupers"
  );
}).prefix("/api/v1/generic-list");
// .middleware("auth");

//Radicado Details
Route.group(() => {
  Route.get("/radicado-details/searchByRecipient", "RadicadoDetailsController.searchByRecipient");
  Route.resource("/radicado-details", "RadicadoDetailsController").apiOnly();
}).prefix("/api/v1/document-management");

//Related Answers
Route.group(() => {
  Route.resource("/related-answers", "RelatedAnswersController").apiOnly();
  Route.delete(
    "/related-answers/:id/:radicadoId",
    "RelatedAnswersController.destroy"
  );
  Route.get(
    "/answer-document/:id/type/:type",
    "RelatedAnswersController.findByIdAndType"
  );
}).prefix("/api/v1/document-management");

Route.group(() => {
  Route.get(
    "/get-by-id/:id",
    "GeneralConfigurationController.getGeneralConfigurationById"
  );
  Route.get("/", "GeneralConfigurationController.getGeneralConfiguration");
  Route.post(
    "/create",
    "GeneralConfigurationController.createGeneralConfiguration"
  );
  Route.put(
    "/update/:id",
    "GeneralConfigurationController.updateGeneralConfiguration"
  );
}).prefix("/api/v1/general-configuration");

Route.group(() => {
  Route.resource(
    "/sender-information",
    "SenderInformationsController"
  ).apiOnly();
  //post for table search
  Route.post("/sender-information/find", "SenderInformationsController.find");
}).prefix("/api/v1/document-management");

Route.group(() => {
  Route.get(
    "/basic-document/search",
    "BasicDocumentInformationsController.searchByNameAndCode"
  );

  Route.resource(
    "/basic-document",
    "BasicDocumentInformationsController"
  ).apiOnly();
}).prefix("/api/v1/document-management");

Route.group(() => {
  Route.get(
    "/recipient-information/search",
    "RecipientInformationsController.searchByNamesAndCode"
  );

  Route.resource(
    "/recipient-information",
    "RecipientInformationsController"
  ).apiOnly();
}).prefix("/api/v1/document-management");

//Entities
Route.group(() => {
  Route.get("/entities/search", "EntitiesController.search");
  Route.resource("/entities", "EntitiesController").apiOnly();
  //post for table search
  Route.post("/entities/find", "EntitiesController.find");
}).prefix("/api/v1/document-management");

//Generic Lists
Route.group(() => {
  Route.get("/geographic-list", "GenericGeographiclListsController.listAll"); //Paises, departamento y municipios
  Route.get("/type-entity-list", "GenericListController.getTypesEntity");
  Route.get("/type-radicado-list", "GenericListController.getTypesRadicado");
}).prefix("/api/v1/document-management/generic-list");
