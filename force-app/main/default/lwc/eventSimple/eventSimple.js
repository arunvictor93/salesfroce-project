import { LightningElement } from 'lwc';

export default class EventSimple extends LightningElement {
    previousHandler(){
        alert("prev");
    }
    nextHandler(){
        alert("next");
    }
    getValue(event){
        alert("get Value="+event.detail);
    }
}