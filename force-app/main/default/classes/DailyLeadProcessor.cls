global class DailyLeadProcessor implements Schedulable{
    global void execute(SchedulableContext ctx){
        List<Lead> lstUpdateLead=new List<Lead>();
        List<Lead> lstLead=[Select Id,LeadSource From Lead Where LeadSource =null];
        for(Lead l:lstLead){
            l.LeadSource ='Dreamforce';
            lstUpdateLead.add(l);
        }
        update lstUpdateLead;
    }
}