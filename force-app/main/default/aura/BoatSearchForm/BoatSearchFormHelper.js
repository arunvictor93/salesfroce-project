({
	getBoatTypeOptionhelper : function(component, event) {
		var action=component.get("c.getBoatTypes");
        action.setCallback(this, function(response){
            if (response.getState() === 'SUCCESS') {
                component.set('v.boatTypeList', response.getReturnValue());
                //this.setBoatTypeIdByNameMap(component);
            }
        });
        $A.enqueueAction(action);
	}
})