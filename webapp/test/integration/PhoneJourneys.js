jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"ZINE/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ZINE/test/integration/pages/App",
	"ZINE/test/integration/pages/Browser",
	"ZINE/test/integration/pages/Master",
	"ZINE/test/integration/pages/Detail",
	"ZINE/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ZINE.view."
	});

	sap.ui.require([
		"ZINE/test/integration/NavigationJourneyPhone",
		"ZINE/test/integration/NotFoundJourneyPhone",
		"ZINE/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});