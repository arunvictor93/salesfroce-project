public class BoatSearchFormCtr {
	@AuraEnabled
    public static List<BoatType__c> getBoatTypes(){
        List<BoatType__c> lstBoatTypes=[Select Id,Name From BoatType__c];
        return lstBoatTypes;
    }
}