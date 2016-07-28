jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 GELENONAYSet in the list
// * All 3 GELENONAYSet have at least one ITEM

sap.ui.require([
	"sap/ui/test/Opa5",
	"ZINE/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ZINE/test/integration/pages/App",
	"ZINE/test/integration/pages/Browser",
	"ZINE/test/integration/pages/Master",
	"ZINE/test/integration/pages/Detail",
	"ZINE/test/integration/pages/Create",
	"ZINE/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ZINE.view."
	});

	sap.ui.require([
		"ZINE/test/integration/MasterJourney",
		"ZINE/test/integration/NavigationJourney",
		"ZINE/test/integration/NotFoundJourney",
		"ZINE/test/integration/BusyJourney",
		"ZINE/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});