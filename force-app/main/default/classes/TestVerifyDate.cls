@isTest
public class TestVerifyDate {
    static testMethod void createData(){
        Date date1=System.today();
        Date date2=System.today();
        VerifyDate.CheckDates(date1, date2);
    }
    static testMethod void createData2(){
        Date date1=System.today().addDays(5) ;
        Date date2=System.today();
        VerifyDate.CheckDates(date1, date2);
    }
}