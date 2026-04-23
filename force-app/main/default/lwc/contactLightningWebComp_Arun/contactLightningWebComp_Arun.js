import { LightningElement, track } from 'lwc';
 
export default class ContactLightningWebComp_Arun extends LightningElement {
    @track
    contacts = [
        {
            Id:1,
            Name:'Arun Garg',
            Title:'Salesforce Consultant'
        },
        {
            Id:2,
            Name:'Amit Singh',
            Title:'Salesforce Consultant'
        },
        {
            Id:3,
            Name:'Amit Garg',
            Title:'Automation Lead'
        }
    ];
}