/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comredware.treinamentoluiz./zaluno_luiz/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
