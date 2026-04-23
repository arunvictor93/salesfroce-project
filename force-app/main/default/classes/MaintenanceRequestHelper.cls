public class MaintenanceRequestHelper {
    
    public static void updateWorkOrders(Map<Id, Case> mapCase){
        // update workorders
        List<Case> newMaintenanceRequestList = new List<Case>();
        System.debug('call');
        for(Case cas : mapCase.values()){
            Case newMaintenanceRequest=new Case();
            newMaintenanceRequest.Subject='test';
            newMaintenanceRequest.Type='Routine Maintenance';
            newMaintenanceRequest.Vehicle__c=cas.Vehicle__c;
            newMaintenanceRequest.Equipment__c=cas.Equipment__c;
            newMaintenanceRequest.Date_Reported__c=date.Today();
           // newMaintenanceRequest.Date_Due__c=Date.today().addDays(Integer.valueOf(cas.Equipment__r.Maintenance_Cycle__c));
            newMaintenanceRequest.Status='New';
            newMaintenanceRequest.Origin='Phone';
            newMaintenanceRequestList.add(newMaintenanceRequest);
            System.debug('newMaintenanceRequestList='+newMaintenanceRequestList);
        }
        if(newMaintenanceRequestList.size()>0){
            insert newMaintenanceRequestList;
        }
    }        
    
}