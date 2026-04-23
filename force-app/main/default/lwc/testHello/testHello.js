import { LightningElement } from 'lwc';

export default class TestHello extends LightningElement {
    greeting='';
    empNames = [ { name: "A" , index : 1} ,{ name: "B" , index : 2} , { name: "C" , index :3} ];

    handleChange(event){
        this.greeting=event.target.value;
        //event.target.value
        
    }
}