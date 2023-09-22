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

Route.group(() => {
  Route.resource("/radicado-details", "RadicadoDetailsController").apiOnly();
}).prefix("/api/v1/document-management");

Route.group(() => {
  Route.resource(
    "/sender-information",
    "SenderInformationsController"
  ).apiOnly();
}).prefix("/api/v1/document-management");

Route.group(() => {
  Route.resource(
    "/basic-document",
    "BasicDocumentInformationsController"
  ).apiOnly();
}).prefix("/api/v1/document-management");

Route.group(() => {
  Route.resource(
    "/recipient-information",
    "RecipientInformationsController"
  ).apiOnly();
}).prefix("/api/v1/document-management");
