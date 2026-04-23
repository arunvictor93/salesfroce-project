({
	doSearch : function(component, event, helper) {
		helper.onSearch(component);
	},
    search:function(component, event, helper) {
        var params = event.getParam('arguments');
        if (params) {
            var boatTypeId = params.boatTypeId;
            helper.onSearch(component);
            return "search complete.";
        }
    },
    onBoatSelect:function(component, event, helper) {
        var boatId=event.getParam("boatId");
        alert("boatId:="+boatId);
        component.set("v.selectedBoatId",boatId);
    }
})