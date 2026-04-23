import { LightningElement, wire, track } from 'lwc';
import getAccounts from '@salesforce/apex/lwcEditSaveRowCtrl.getAccounts';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import sendData from '@salesforce/apex/lwcEditSaveRowCtrl.getAccountData';
import sendApproveData from '@salesforce/apex/lwcEditSaveRowCtrl.saveApprovedData';
import SystemModstamp from '@salesforce/schema/Account.SystemModstamp';
 
const columns = [
    {
        label: 'Name',
        fieldName: 'Name',
        type: 'text',
        editable: true,
    }, {
        label: 'Phone',
        fieldName: 'Phone',
        type: 'phone',
        editable: true,
    }, {
        label: 'Reason',
        fieldName: 'Reason__c',
        type: 'text',
        editable: true,
    }
    
];
export default class LwcEditSaveRow extends LightningElement {
    columns = columns;
    @track accObj;
    fldsItemValues = [];
    finalDraftItems =[];
    @track isModalOpen = false;
    @track isAllRejectOpen=false;
    rejectdescp;

    @wire(getAccounts)
    cons(result) {
        this.accObj = result;
        if (result.error) {
            this.accObj = undefined;
        }
    };
 
    saveHandleAction(event) {
        let dd= this.finalDraftItems;
        const inputsItems1 = this.finalDraftItems.slice().map(draft => {
            const fields = Object.assign({}, draft);
            console.log(fields);
            return { fields };
        });
        
        console.log('finalDraftItems='+JSON.stringify(this.finalDraftItems));
        console.log('inputsItems='+JSON.stringify(inputsItems1));
        return ;
        this.fldsItemValues = event.detail.draftValues;
        console.log('fedd='+JSON.stringify(this.fldsItemValues));
        const inputsItems = this.fldsItemValues.slice().map(draft => {
            const fields = Object.assign({}, draft);
            return { fields };
        });
 
        console.log('inputsItems='+JSON.stringify(inputsItems));
        const promises = inputsItems.map(recordInput => updateRecord(recordInput));
        Promise.all(promises).then(res => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Records Updated Successfully!!',
                    variant: 'success'
                })
            );
            this.fldsItemValues = [];
            return this.refresh();
        }).catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: 'An Error Occured!!',
                    variant: 'error'
                })
            );
        }).finally(() => {
            this.fldsItemValues = [];
        });
    }
 
   
    async refresh() {
        await refreshApex(this.accObj);
    }

    cellchallange(event){
        alert("hiii"+event.detail.row);
        
        this.fldsItemValues = event.detail.draftValues;
        const inputsItems = this.fldsItemValues.slice().map(draft => {
            const fields = Object.assign({}, draft);
            console.log(fields);
            this.finalDraftItems.push(fields);
            return { fields };
        });
        console.log('finalDraftItems='+JSON.stringify(this.finalDraftItems));
        console.log('inputsItems='+JSON.stringify(inputsItems));
    }
    handleSave(event){
        
        let dd= this.finalDraftItems;
        const inputsItems1 = this.finalDraftItems.slice().map(draft => {
            const fields = Object.assign({}, draft);
            console.log(fields);
            return { fields };
        });
        
        console.log('finalDraftItems='+JSON.stringify(this.finalDraftItems));
        console.log('inputsItems='+JSON.stringify(inputsItems1));

        this.saveRejectReasonData(this.finalDraftItems,"");
        //return;
        const promises = inputsItems1.map(recordInput => updateRecord(recordInput));
        Promise.all(promises).then(res => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Records Updated Successfully!!',
                    variant: 'success'
                })
            );
            this.fldsItemValues = [];
            this.isModalOpen = false;
            return this.refresh();
        }).catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: 'An Error Occured!!',
                    variant: 'error'
                })
            );
        }).finally(() => {
            this.fldsItemValues = [];
        });
    }
    openModal() {
        // to open modal set isModalOpen tarck value as true
        let isReasonBlank=false;
        var selectedRecords =  this.template.querySelector("lightning-datatable").getSelectedRows();
        if(selectedRecords.length < this.accObj.data.length && selectedRecords.length != 0){
            console.log('selectedRecords are ', selectedRecords);
   
            let ids = '';
            selectedRecords.forEach(currentItem => {
                ids = ids + ',' + currentItem.Id;
                if(currentItem.Reason__c === undefined){
                    isReasonBlank=true
                }
                
                
            });
            if(isReasonBlank){
                //alert('Please provide the reject reason.');
            }
            this.selectedIds = ids.replace(/^,/, '');
            this.lstSelectedRecords = selectedRecords;
            //alert(this.selectedIds);
            this.isModalOpen = true;
        } 
        else if(selectedRecords.length == 0){
            alert('Please select the data');
        }  
        else if(selectedRecords.length == this.accObj.data.length && selectedRecords.length != 0){
            alert('open box');
            this.isAllRejectOpen =true;
            console.log(JSON.stringify());
        }
    }
    closeModal() {
        // to close modal set isModalOpen tarck value as false
        this.isModalOpen = false;
    }
    closeRejectModal() {
        // to close modal set isModalOpen tarck value as false
        this.isAllRejectOpen = false;
    }
    saveRejectReasonData(finallist,rejectComment){
        sendData({listAcc:finallist,commonRejectComment:rejectComment})
        .then(result => {
            console.log('Data:'+ JSON.stringify(result));
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Records rejected Successfully!!',
                    variant: 'success'
                })
            );
        }) .catch(error => {
            console.log(error);
            this.error = error;
        });
    }
    handleAllRejectSave(){
        if(this.rejectdescp!== undefined){
            this.saveRejectReasonData(this.accObj.data,this.rejectdescp);
            this.isAllRejectOpen = false;
            return this.refresh();
        }
    }
    handleChange(event ){
        
        this.rejectdescp = event.detail.value;
        console.log( 'Updated Value is ' +  this.rejectdescp);
    }
    approveData(){
        var selectedRecords =  this.template.querySelector("lightning-datatable").getSelectedRows();
        if(selectedRecords.length == this.accObj.data.length && selectedRecords.length != 0){
            sendApproveData({listAcc:this.accObj.data})
            .then(result => {
                console.log('Data:'+ JSON.stringify(result));
            }) .catch(error => {
                console.log(error);
                this.error = error;
            });
            
        }
        else if(selectedRecords.length < this.accObj.data.length && selectedRecords.length != 0){
            console.log('fff='+JSON.stringify(selectedRecords));
            sendApproveData({listAcc:selectedRecords})
            .then(result => {
                console.log('Data:'+ JSON.stringify(result));
                //this.accObj=result;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Records approved Successfully!!',
                        variant: 'success'
                    })
                );
            }) .catch(error => {
                console.log(error);
                this.error = error;
            });
        }
        else if(selectedRecords.length == 0){
            alert('Please select the data');
        }
    }
}