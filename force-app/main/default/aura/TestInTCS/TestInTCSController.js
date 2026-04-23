({
	
    handleClick : function(component, event, helper) {
		helper.helperAlert();
        var action = component.get("c.getStringArray");
        action.setCallback(this, function(response) {
             
             alert(response.getState());
             alert(response.getReturnValue());
            component.set("v.favoriteColors",response.getReturnValue());
            ///rt(JSON.stringify(response))
        });
        $A.enqueueAction(action);
        

	},
    handleClick2:function(component, event, helper){
       helper.helperAlert();
       console.log('ghghg='+component.get("v.textVal"));
       component.set("v.textVal",'Hiiii This is my second aura component')
    }
})