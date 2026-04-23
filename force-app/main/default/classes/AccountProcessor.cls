public class AccountProcessor{
  @future
  public static void countContacts(List<Id> accIds) {
    List<Account> accounts = [Select Id,Number_of_Contacts__c,Name,(Select Id From Contacts) from Account Where Id IN :accIds];
    for(Account acc:accounts){
        acc.Number_of_Contacts__c=acc.Contacts.size();
    }
    update accounts;
  }
}