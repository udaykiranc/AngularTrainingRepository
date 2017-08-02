import {Component} from '@angular/core';
import {Contact} from "./contact.interface";

@Component({
    selector: 'my-app',
    template: `
        <contacts-list [(selected)]="selectedContact"></contacts-list>
                <a id="add" href="#" class="text-danger" (click)="onAdd()"><span class="glyphicon glyphicon-plus"></span>Add</a>
        <contact-details [(selected)]="selectedContact"></contact-details>
  
    `
})
export class AppComponent {

    selectedContact:Contact;

    onAdd() {
        this.selectedContact = {id: null, firstName: '', lastName: '', email: ''};
    }




}