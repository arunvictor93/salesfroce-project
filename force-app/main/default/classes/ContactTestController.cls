public class ContactTestController {
    @AuraEnabled
    public static List<Contact> getContactData(){
        List<Contact> listContact = new List<Contact>();
        try {
            listContact=[Select Id,Name,Title from Contact Limit 10];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return listContact;
    }
   
}