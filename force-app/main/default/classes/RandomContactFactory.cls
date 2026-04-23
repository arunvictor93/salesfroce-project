public class RandomContactFactory {
    public static List<Contact> generateRandomContacts(Integer a,String s){
        List<Contact> lstContacts = new List<Contact>();
        for(Integer i=0;i<a;i++){
            Contact c=new Contact();
            c.FirstName='Test'+i;
            c.LastName=s;
            lstContacts.add(c);
        }
        return lstContacts;
    }
}