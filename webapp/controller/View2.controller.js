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

        onSave(oEvent) {
          var modelAluno = this.getView().getModel("Aluno").getData();
          var oModel = this.getView().getModel();

          var oAluno = {
            Plant: modelAluno.Plant,
            Aluno: modelAluno.Aluno,
            Nome: modelAluno.Nome,
            Idade: modelAluno.Idade,
            Aniversario: modelAluno.Aniversario,
            Valor: modelAluno.Valor.toString(),
            Ativo: modelAluno.Ativo,
            Genero: modelAluno.Genero,
            CreatedAt: modelAluno.CreatedAt,
            CreatedBy: modelAluno.CreatedBy,
          };

          var that = this;
          oModel.create("/AlunosSet", oAluno, {
            success: function (oData, oResponse) {
              var oSapMessage = JSON.parse(oResponse.headers["sap-message"]);
              if (oSapMessage.severity === "success") {
                that.getView().getModel("Aluno").setData({});
                sap.m.MessageBox.success(
                  oSapMessage.message + " - " + oData.Aluno,
                  {
                    onClose: function (sAction) {
                      that.onNavBack(oEvent);
                    },
                  }
                );
              } else {
                sap.m.MessageBox.error(oSapMessage.message);
              }
            },
            error: function (oError) {
              sap.m.MessageBox.error("Creation failed");
            },
          });
        },
      }
    );
  }
);
