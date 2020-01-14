/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapcp/tutorial/cf/UI200114/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});