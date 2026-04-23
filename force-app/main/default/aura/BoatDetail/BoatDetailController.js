({
	onFullDetails : function(component, event, helper) {
        //which fires the appropriate event to redirect the user to the boat’s default detail page
		var navEvt = $A.get("e.force:navigateToSObject");
		navEvt.setParams({
			"recordId": component.get("v.boat.Id")
		});

        navEvt.fire();
	}
})