public class OpportunityController {
    public static List<Opportunity> findOpportunities(String searchKey) {
        System.debug('searchKey='+searchKey);
        List<Opportunity> opprtunityData = [SELECT Id, Name From Opportunity Where 
                                            AccountId =:searchKey and Status__c ='Pending For Approval'];
        return opprtunityData;
    }
    public static List<Contact> findContacts(String searchKey) {
        System.debug('searchKey='+searchKey);
        List<Contact> contactData = [SELECT Id, Name,Reason__c From Contact Where 
                                     AccountId =:searchKey and Status__c ='Pending For Approval'];
        return contactData;
    }
}