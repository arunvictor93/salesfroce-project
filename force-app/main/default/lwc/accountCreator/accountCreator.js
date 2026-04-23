import { api, LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import { getRecord } from 'lightning/uiRecordApi';
export default class AccountCreator extends LightningElement {
    objectApiName = ACCOUNT_OBJECT;
    // Expose a field to make it available in the template
    fields = [NAME_FIELD, REVENUE_FIELD, INDUSTRY_FIELD];
    @api recordId;
    @api objectApiName;
    handleSuccess(event){
        const toastEvent = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}