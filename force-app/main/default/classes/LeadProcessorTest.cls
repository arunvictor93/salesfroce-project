@isTest
private class LeadProcessorTest{
    @testSetup
    static void setup(){
        List<Lead> lstLead=new List<Lead>();
        // insert 200 lead record
        for (Integer i=0;i<200;i++) {
            lstLead.add(new Lead(LeadSource='Test',FirstName='FirstName',LastName='LastName'+i,Company='demo'+i));
        }
        insert lstLead;
    }
    static testmethod void test() {        
        Test.startTest();
        LeadProcessor leadProcess = new LeadProcessor();
        Id batchId = Database.executeBatch(leadProcess );
        Test.stopTest();
        // after the testing stops, assert records were updated properly
        System.assertEquals(200, [select count() from Lead where LeadSource= 'Dreamforce']);
    }
}