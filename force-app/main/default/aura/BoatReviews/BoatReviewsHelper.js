({
    onInit : function(component,event) {
        var boat = component.get("v.boat");
        var action = component.get("c.getAll");
        action.setParams({"boatId" : boat.Id});
        action.setCallback(this,function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                component.set("v.boatReviews", response.getReturnValue());
                console.log("APEX success");
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        //send action off to be executed in APEX
        $A.enqueueAction(action);
    }
})