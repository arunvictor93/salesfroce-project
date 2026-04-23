({
    onBoatSelected : function(component, event, helper) {
        var boatSelected = event.getParam("boat");
        
        component.set("v.id",boatSelected.Id);
        var service = component.find("service");
        service.reloadRecord() ;
    },
    onRecordUpdated:function(component, event, helper) {},
    onBoatReviewAdded : function(component, event, helper) {
        console.log('Event received');
        component.find("details").set("v.selectedTabId", "boatreviewtab");
        //invoke a refresh on the reviews tab, calling public method refresh
        var BoatReviews = component.find("BoatReviews");
        //BRcmp is the aura:id for the component when invoked in BoatDetails.cmp
        BoatReviews.refresh();

    }
})