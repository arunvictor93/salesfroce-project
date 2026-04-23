({
    doInit:function(component, event, helper){
        var action = component.get("c.getItems");
        action.setCallback(this, function(response){
            var state = response.getState();
            
            if (component.isValid() && state === "SUCCESS") {
                
                
                component.set("v.items", response.getReturnValue());
                
            }
        });
        
        $A.enqueueAction(action);
    },
    clickCreateItem : function(component, event, helper) {
        var validCamping = component.find('campingform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        
        if(validCamping){
            var newCampingItem = component.get("v.newItem");
            //helper.createCamping(component,newCampingItem);
            /*var campings = component.get("v.items");
            var item = JSON.parse(JSON.stringify(newCampingItem));
            
            campings.push(newCampingItem);
            
            component.set("v.items",campings);
            component.set("v.newItem",{ 'sobjectType': 'Camping_Item__c','Name': '','Quantity__c': 0,
                                       'Price__c': 0,'Packed__c': false });*/
            helper.createItem(component,event, newCampingItem);
        }
    },
    handleAddItem:function(component, event, helper){
        var action = component.get("c.saveItem");
        var Item = event.getParam("item");
        var lstItems = component.get("v.items");
        
        lstItems.push(Item);
        component.set("v.items",lstItems);
        console.log("After:"+lstItems);
        action.setParams({"CampingItem":Item});
        action.setCallback(this,function(response){
            var state = response.getState();
            
            if (component.isValid() && state === "SUCCESS") {
                //let the magic happen
            }
        });
        $A.enqueueAction(action); 
    }
})