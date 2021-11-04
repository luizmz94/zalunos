sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "../util/formatter",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} formatter
   */
  function (Controller, Filter, FilterOperator, formatter) {
    "use strict";

    return Controller.extend(
      "com.redware.treinamentoluiz.zalunoluiz.controller.View2",
      {
        formatter: formatter,
        onInit: function () {
          this._smartFilterBar = this.getView().byId("smartFilterBar");
          this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        },
        onNavBack(oEvent) {
          this._oRouter.navTo("RouteView1");
        },
      }
    );
  }
);
