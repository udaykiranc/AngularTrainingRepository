import {Component, OnInit, OnDestroy} from '@angular/core';
import {Contact} from "./contact.interface";
import {ContactsService} from "./contacts.service";
import {Observable} from "rxjs/observable";

@Component({
    template: `
         <contacts-list [(selected)]="selectedContact" [newContactAdded]="newContact"></contacts-list>
                 <a id="add" href="#" class="text-danger" (click)="onAdd()"><span class="glyphicon glyphicon-plus"></span>Add</a>
         <contact-details [(selected)]="selectedContact" (newContactAdded)="newContact = $event"></contact-details>
    `
})
export class ContactsComponent {

    constructor() {
    }

    newContact : Contact;
    selectedContact: Contact;

    onAdd() {
        this.selectedContact = {id: null, firstName: '', lastName: '', email: ''};
    }
}