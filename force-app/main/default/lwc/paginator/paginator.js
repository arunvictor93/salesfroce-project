import { LightningElement } from 'lwc';

export default class Paginator extends LightningElement {
    handlePrevClick(){
        alert('hi');
        this.dispatchEvent(new CustomEvent('previous'));
    }
    handleNextClick(){
        this.dispatchEvent(new CustomEvent('next'));
    }
    handleDataClick(){
        // Creates the event with the contact ID data.
        const selectedEvent = new CustomEvent('selected', { detail: 'Test Data' });

        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
    }
}