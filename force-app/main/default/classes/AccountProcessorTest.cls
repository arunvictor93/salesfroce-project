@isTest
private class AccountProcessorTest{
    static testMethod void createData(){
        Account a=new Account();
        a.name ='Test';
        insert a;
        
        Contact c=new Contact();
        c.lastname='garg';
        c.AccountId=a.Id;
        insert c;
        Test.startTest();
            
            List<Id> lstAccId=new List<Id>();
            lstAccId.add(a.Id);
            AccountProcessor.countContacts(lstAccId);
        Test.stopTest();
    }
    
}