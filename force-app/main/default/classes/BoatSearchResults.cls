public class BoatSearchResults {
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        List<Boat__c> lstBoat=new List<Boat__c>();
        System.debug('boatTypeId:='+boatTypeId);
        if(String.isNotBlank(boatTypeId)){
            lstBoat=[Select Id,Name,Picture__c,Contact__r.Name From Boat__c Where BoatType__c=:boatTypeId];
        }
        else{
            lstBoat=[Select Id,Name,Picture__c,Contact__r.Name From Boat__c];
        }
        System.debug('lstBoat:'+lstBoat);
       	return lstBoat;
    }
}