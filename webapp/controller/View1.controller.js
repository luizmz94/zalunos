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
      "com.redware.treinamentoluiz.zalunoluiz.controller.View1",
      {
        formatter: formatter,
        onInit: function () {
          this._smartFilterBar = this.getView().byId("smartFilterBar");
          this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        },

        onCreate(oEvent) {
          this._oRouter.navTo("RouteView2");
        },

        onBeforeRebindTable: function (oEvent) {
          var mBindingParams = oEvent.getParameter("bindingParams");
          var oComboBox = this._smartFilterBar.getControlByKey("Genero");

          var aCountKeys = oComboBox.getSelectedKeys();
          aCountKeys.forEach((a) => {
            var newFilter = new Filter("Genero", FilterOperator.EQ, a);
            mBindingParams.filters.push(newFilter);
          });
          var oAtivo = this._smartFilterBar.getControlByKey("Ativo");
          var state = oAtivo.getState();
          var newFilter = new Filter(
            "Ativo",
            FilterOperator.EQ,
            oAtivo.getState()
          );
          mBindingParams.filters.push(newFilter);
        },

        onNavigationPress: function (oEvent) {
          var oLine = oEvent.getSource();
          var oModel = this.getView().getModel();
          var lAluno = oLine.getBindingContext().getProperty("Aluno");
          var lPlant = oLine.getBindingContext().getProperty("Plant");

          var that = this;
          var sRead = oModel.createKey("/AlunosSet", {
            Plant: lPlant,
            Aluno: lAluno,
          });

          oModel.read(sRead, {
            success: function (oData, oResponse) {
              that.getView().getModel("Aluno").setData(oData);
              that._oRouter.navTo("RouteView2");
            },
            error: function (oError) {},
          });
        },
      }
    );
  }
);
