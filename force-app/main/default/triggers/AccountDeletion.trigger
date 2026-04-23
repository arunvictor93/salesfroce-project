trigger AccountDeletion on Account (before delete) {
     // Prevent the deletion of accounts if they have related opportunities.
    for(Account a:[Select Id,Name From Account Where Id IN:Trigger.old and Id IN (Select AccountId From Opportunity)]){
        Trigger.oldMap.get(a.Id).addError('Cannot delete account with related opportunities.');
    }
}