sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		concepts:function(){
			var conceptsArr = [{control:"Table",pageID:"Table"},{control:"JSON Binding Demo",pageID:"JSON_Demo"}];
			return conceptsArr;
		}

	};
});