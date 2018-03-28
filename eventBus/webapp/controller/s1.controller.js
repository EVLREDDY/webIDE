sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ebeventBus.controller.s1", {
		onInit:function(){
			var oEventBus = sap.ui.getCore().getEventBus();
			oEventBus.subscribe("S","sum",this.returnSum,this);
			oEventBus.subscribe("S","subtract",this.returnSub,this);
		},
		returnSum:function(a,b,data){
		 sap.m.MessageToast.show("Sum of '" + data.a + "' and '" + data.b + "' is:" +  (parseInt( data.a,10 ) + parseInt( data.b,10 )));
		},
		returnSub:function(a,b,data){
		 sap.m.MessageToast.show("Sum of '" + data.a + "' and '" + data.b + "' is:" +  (parseInt( data.a,10 ) - parseInt( data.b,10 )));
		},
		
		onSubmit:function(e){
			var router = this.getOwnerComponent().getRouter();
			router.navTo("s2",{});
		}
	});
});