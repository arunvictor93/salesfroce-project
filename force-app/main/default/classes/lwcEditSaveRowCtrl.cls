public with sharing class lwcEditSaveRowCtrl {

    @AuraEnabled(Cacheable = true)
    public static List<Account> getAccounts() {

        List<Account> accList = [SELECT Id, Name, Phone, Industry, Type, Website, Description,Reason__c FROM Account Where Status__c='Pending for Approval' ORDER BY CreatedDate DESC ];

        return accList;
    }    
     @AuraEnabled
    public static void getAccountData(List<Account> listAcc,String commonRejectComment){
        System.debug('commonRejectComment='+commonRejectComment);
        System.debug('listAcc='+listAcc);
        List<ApproveHistoryData__c> listAppData = new List<ApproveHistoryData__c>();
        List<Account> listAllAccUpdate = new List<Account>();
        for(Account objAccc : listAcc){
            system.debug('***'+objAccc.Reason__c);
            ApproveHistoryData__c appData = new ApproveHistoryData__c();
            appData.Account__c=objAccc.Id;
            
            if(String.isNotBlank(commonRejectComment)){
                appData.Reason__c = commonRejectComment;
            }
            else{
                appData.Reason__c = objAccc.Reason__c;
            }
            listAppData.add(appData);
        }
        
        // Update the acc data
        if(String.isNotBlank(commonRejectComment)){
            for(Account objAccc : listAcc){
                objAccc.Reason__c =commonRejectComment;
                objAccc.Status__c='Rejected';
                listAllAccUpdate.add(objAccc);
            }
        }
        insert listAppData;
        if(!listAllAccUpdate.isEmpty()){
            update listAllAccUpdate;
        }
    
    }
    @AuraEnabled
    public static List<Account> saveApprovedData(List<Account> listAcc){
        System.debug('listAcc='+listAcc);
        if(!listAcc.isEmpty()){
            for(Account objAccc : listAcc){
                objAccc.Status__c='Approved';
            }
            update listAcc;
        }
        return getAccounts();
    }
}