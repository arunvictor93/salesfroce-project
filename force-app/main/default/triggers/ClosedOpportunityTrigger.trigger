trigger ClosedOpportunityTrigger on Opportunity (after insert) {
    List<Task> lstTask=new List<Task>();
    for(Opportunity o:Trigger.new){
        if(o.StageName=='Closed Won'){
            lstTask.add(new Task(Subject='Follow Up Test Task',WhatId=o.Id));
        }
    }
    if(lstTask.size()>0){
        insert lstTask;
    }
}