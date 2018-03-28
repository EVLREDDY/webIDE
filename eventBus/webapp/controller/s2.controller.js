sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ebeventBus.controller.s2", {
		onInit:function(){
			var data = {
				a:"",
				b:""
			};
			this.getView().setModel(new sap.ui.model.json.JSONModel(data),"num");
		},
		onSum:function(){
			var  data = this.getView().getModel("num").getData();
			var oEventBus = sap.ui.getCore().getEventBus();
			oEventBus.publish("S","sum",{a:data.a,b:data.b});
		},
		onSub:function(){
			var  data = this.getView().getModel("num").getData();
			var oEventBus = sap.ui.getCore().getEventBus();
			oEventBus.publish("S","subtract",{a:data.a,b:data.b});
		}
	});
});