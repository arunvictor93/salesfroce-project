import { LightningElement } from 'lwc';

export default class Child extends LightningElement {
    handleChange(event){
        const name=event.target.value;
        const selectEvent=new CustomEvent('inptext',{
            detail:name
        });
        this.dispatchEvent(selectEvent);
    }
}