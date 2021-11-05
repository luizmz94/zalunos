sap.ui.define(
  ["sap/ui/model/json/JSONModel", "sap/ui/Device"],
  function (JSONModel, Device) {
    "use strict";

    return {
      createDeviceModel: function () {
        var oModel = new JSONModel(Device);
        oModel.setDefaultBindingMode("OneWay");
        return oModel;
      },

      createAlunoModel: function () {
        var oModel = new JSONModel({
          Plant: "",
          Aluno: "",
          Nome: "",
          Idade: "",
          Aniversario: "",
          Valor: "",
          Ativo: true,
          Genero: "",
          CreatedAt: new Date(),
          CreatedBy: "",
        });
        return oModel;
      },
    };
  }
);
