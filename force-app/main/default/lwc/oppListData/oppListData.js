import { LightningElement, api,wire,track } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import findOpportunity from '@salesforce/apex/OpportunityController.findOpportunities';
import findContacts from '@salesforce/apex/OpportunityController.findContacts';
const columns = [
    { label: 'Name', fieldName: 'Name' },
    {
        label: 'Reason',
        fieldName: 'Reason__c',
        type: 'text',
        editable: true,
    }
];
export default class OppListData extends LightningElement {
    @api recordId;
    @api objectApiName;
    data = [];
    columns = columns;
    rowOffset = 0;
    OppDataList;
    draftValues = [];
    @track accObj;
    
    @wire(CurrentPageReference)
    getStateParameters(currentPageReference) {
        if (currentPageReference) {
            this.recordId = currentPageReference.state.recordId;
            console.log('wiee='+this.recordId);
            findContacts({ searchKey: this.recordId })
            .then((result) => {
                console.log('result='+JSON.stringify(result));
                this.accObj = result;
                this.error = undefined;
            })
            .catch((error) => {
                this.error = error;
                this.contacts = undefined;
            });
        }
    }
    rejectAction(){
        console.log(this.OppDataList);
        console.log(this.draftValues);
    }
    saveHandleAction(event) {
        console.log(event.detail.draftValues);
    }
}