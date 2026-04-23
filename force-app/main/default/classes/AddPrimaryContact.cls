public class AddPrimaryContact implements Queueable{
     private Contact c;
     private String state;
     public AddPrimaryContact(Contact c,String state){
         this.c= c;
         this.state= state;
     }
     public void execute(QueueableContext context) {
        List<Account> listAccount = [SELECT ID, Name,(Select Id From Contacts) FROM ACCOUNT WHERE BillingState = :state LIMIT 200];
        List<Contact> lstContact = new List<Contact>();
        for(Account a:listAccount){
            Contact contact=c.clone(false,false,false,false);
            contact.AccountId=a.Id;
            lstContact.add(contact);
        }
        if(lstContact.size()>0){
            insert lstContact;
        }
    }
}