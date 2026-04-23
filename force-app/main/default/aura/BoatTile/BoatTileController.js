({
    onBoatClick : function(component, event, helper) {
        var boatSelectEvent=component.getEvent("BoatSelect");
        var boatId=event.getSource().get("v.name");
        boatSelectEvent.setParams(
            {"boatId" : boatId}
        );
        boatSelectEvent.fire();
        
        // Another boat selected event
        
        var boat=component.get("v.boat");
        var lat =boat.Geolocation__Latitude__s;
        var long =boat.Geolocation__Longitude__s;
        var label = boat.Name;
        var BoatSelectedEvt = $A.get('e.c:BoatSelected');
        
        BoatSelectedEvt.setParams({
            "boat" : boat
        });     
        
        BoatSelectedEvt.fire();
        
        var plotMapMarkerAppEvent = $A.get("e.c:PlotMapMarker");
        plotMapMarkerAppEvent.setParams({
            "lat"   : lat,
            "long"  : long,
            "label" : label,
            "SObjectId" : boat.Id});
        plotMapMarkerAppEvent.fire();
    }
})