import { LightningElement, track ,api} from 'lwc';

export default class HelloWorld_Arun extends LightningElement {
    @track greeting='World';
    @api name;
    changeHandler(event){
        this.greeting=event.target.value; 
    }
    get uppercasedName(){
        return `${this.greeting}`.toUpperCase();
    }
}