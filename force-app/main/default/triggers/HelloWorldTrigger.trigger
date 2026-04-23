trigger HelloWorldTrigger on Account (after insert) {
    List<Opportunity> oppList = new List<Opportunity>();
    // Get the related opportunities for the accounts in this trigger
    /*List<Account> lstAccount=[SELECT Id,Name,(SELECT Id FROM Opportunities) FROM Account WHERE Id IN :Trigger.New];
    if(lstAccount!=null && lstAccount.size()>0){
        for(Account a:lstAccount){
            if(a.Opportunities.size()==0){
                oppList.add(new Opportunity(Name=a.Name+'Opportunity',StageName='Prospecting',CloseDate=System.today().addMonths(1),AccountId=a.Id));
            }
        }
    }
    if(oppList.size()>0){
        insert oppList;
    }*/
    Map<Id,Account> acctsWithOpps = new Map<Id,Account>([SELECT Id,Name,(SELECT Id FROM Opportunities) FROM Account WHERE Id IN :Trigger.New]);
    System.debug('acctsWithOpps:='+acctsWithOpps);
    for(Account a:Trigger.New){
        if (acctsWithOpps.get(a.Id).Opportunities.size() == 0) {
            oppList.add(new Opportunity(Name=a.Name+'Opportunity',StageName='Prospecting',CloseDate=System.today().addMonths(1),AccountId=a.Id));
        }
    }
    if(oppList.size()>0){
        insert oppList;
    }
}