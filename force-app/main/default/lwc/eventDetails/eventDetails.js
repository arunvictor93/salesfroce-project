import { LightningElement } from 'lwc';

export default class EventDetails extends LightningElement {
    handleEvent(){
        alert("Hi I got previous event.");
    }
    handleNextEvent(){
        alert("Hi I got next event.");
    }
    handleDataEvent(event){
        alert("data"+event.detail);
    }
}