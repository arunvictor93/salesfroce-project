({
	onFormSubmit : function(component, event, helper) {
		console.log("event received");
        var formData=event.getParam("formData");
        console.log("formData:="+formData.boatTypeId);
        var boatTypeId=formData.boatTypeId;
        var BSRcmp = component.find("BSRcmp");
        var auraMethodResult = BSRcmp.search(boatTypeId);
        console.log("auraMethodResult: " + auraMethodResult);
	}
})