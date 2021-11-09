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

          oModel.create("/AlunosSet", oAluno, {
            success: function (oData, oResponse) {
              console.log(oResponse);
              sap.m.MessageBox.success(" Created Successfully");
            },
            error: function (oError) {
              sap.m.MessageBox.error(" Creation failed");
            },
          });
        },
      }
    );
  }
);
