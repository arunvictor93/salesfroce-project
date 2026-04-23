({
    createItem : function(component, event,camping) {
        var action = component.get("c.saveItem");
        action.setParams({
            "item": camping
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var campings = component.get("v.items");
                console.log('res:='+JSON.stringify(response.getReturnValue()))
                campings.push(response.getReturnValue());
                component.set("v.items", campings);
            }
        });
        $A.enqueueAction(action);
    }
})