({
    doInit : function(component, event, helper) {
        helper.getBoatTypeOptionhelper(component, event, helper);
    },
    createBoat:function(component, event, helper){
        var selectedBoatTypeId=component.get("v.selectedBoatType");
        if(selectedBoatTypeId !== ""){
            var createRecordEvent = $A.get('e.force:createRecord');
            if ( createRecordEvent ) {
                createRecordEvent.setParams({
                    'entityApiName': 'Boat__c',
                    'defaultFieldValues': {
                        'BoatType__c' : component.get("v.selectedBoatType")
                    }
                });
                createRecordEvent.fire();
                component.set("v.showNewButton", createRecordEvent);
            } else {
                /* Create Record Event is not supported */
                alert("Boat creation not supported");
            } 
        }
        else{
            alert("Please select any boat type");
        }
        
    },
    onFormSubmit:function(component,event,helper){
         /*var formSubmit = component.getEvent("FormSubmit");
        alert("formSubmit:="+formSubmit)
        var selectedBoatTypeId=component.get("v.selectedBoatType");
        formSubmit.setParams({"formData":
                              {"boatTypeId" : selectedBoatTypeId}
                             });*/	
        var selectedBoatTypeId=component.get("v.selectedBoatType");
        var formSubmit = component.getEvent("formsubmit");
        formSubmit.setParams({"formData":
                            {"boatTypeId" : selectedBoatTypeId}
        });
        formSubmit.fire();

    }
})