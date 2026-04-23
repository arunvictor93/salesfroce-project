({
	packItem : function(component, event, helper) {
		var campingItem=component.get("v.item");
        campingItem.Packed__c=true;
        component.set("v.item",campingItem);
        component.set("v.disabled",true);
	}
})