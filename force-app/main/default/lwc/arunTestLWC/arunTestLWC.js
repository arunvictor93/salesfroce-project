import { LightningElement,api,track } from 'lwc';
import getContactList from '@salesforce/apex/ContactTestController.getContactData';
export default class ArunTestLWC extends LightningElement {
     greeting='This is Dev';
     showValue;
     contacts;
    handleOnChange(event){
        console.log('hi'+event.currentTarget.value);
        console.log('hi'+event.target.value);
        this.greeting=event.target.value
    }
    connectedCallback(){
        getContactList()
        .then(result => {
            console.log(result);
            this.contacts = result;
        })
        .catch(error => {
            this.error = error;
        });
    }
    handleClick(){
        alert(this.greeting);
        this.showValue=this.greeting;
        getContactList()
        .then(result => {
            console.log(result);
            this.contacts = result;
        })
        .catch(error => {
            this.error = error;
        });
    }
}