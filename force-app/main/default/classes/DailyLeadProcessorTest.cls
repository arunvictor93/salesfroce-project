@isTest
private class DailyLeadProcessorTest{
    public static String CRON_EXP = '0 0 0 15 3 ? 2022';
    static testmethod void testScheduledJob(){
        List<Lead> lstLead= new List<Lead>();
        for(Integer i=0;i<200;i++){
            lstLead.add(new Lead(FirstName='FirstName',LastName='LastName'+i,Company='demo'+i));
        }
        if(lstLead.size()>0){
            insert lstLead;
        }
        
        Test.startTest();
        // Schedule the test job
        system.schedule('testschedule', '0 56 11 * * ?', new DailyLeadProcessor());       
        
        Test.stopTest();
    }
}