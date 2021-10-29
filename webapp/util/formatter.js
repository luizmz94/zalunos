sap.ui.define([], function () {
  "use strict";
  return {
    getGenero: function (sGenero) {
      var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
      switch (sGenero) {
        case "1":
          return resourceBundle.getText("genMasc");
        case "2":
          return resourceBundle.getText("genFem");
        case "3":
          return resourceBundle.getText("genOut");
        default:
          return sGenero;
      }
    },
  };
});
