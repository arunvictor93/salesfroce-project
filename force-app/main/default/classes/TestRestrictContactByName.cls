@isTest
private class TestRestrictContactByName {
    @isTest static void testContactData() {
        Contact c=new Contact();
        c.LastName='INVALIDNAME';
        insert c;
    }
}