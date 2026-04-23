trigger MaintenanceRequest on Case (before update, after update) {
    // call MaintenanceRequestHelper.updateWorkOrders  
    Map<Id, Case> mapCase = new Map<Id, Case>();
    
    if (Trigger.isUpdate) {
        if (Trigger.isAfter) {

             for(Case c : Trigger.new)
             {
                 if(c.Status == 'Closed' && (c.type == 'Repair' || c.type =='Routine Maintenance'))
                 {
                       mapCase.put(c.id, c);
                         
                 }
             }
        }
    }
            
    MaintenanceRequestHelper.updateWorkOrders(mapCase);
    //MaintenanceRequestHelper.updateWorkOrders();
    
}