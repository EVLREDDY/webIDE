sap.ui.define([
	"sap/ui/core/mvc/Controller","Controls/model/models","sap/ui/model/json/JSONModel"
], function(Controller,models,JSONModel) {
	"use strict";

	return Controller.extend("Controls.controller.Home", {
		onInit:function(){
			this.getView().setModel(new JSONModel(models.concepts()),"controlModel");
		}
	});
});