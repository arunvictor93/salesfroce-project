({
	fireGlobal: function (cmp, event, helper) {
        var actionAPI = cmp.find("quickActionAPI");
       // New Contact is a global action
        var args = { actionName: "NewContact" };
        actionAPI.invokeAction(args);
    }
})