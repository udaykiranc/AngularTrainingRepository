import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {Contact} from "./contact.interface";
import {ContactsService} from "./contacts.service";
import {Observable} from "rxjs/observable";
import { ContactDetailsComponent } from "./contact-details.component";
import {DialogService} from "../dialog.service";

@Component({
    template: `
         <contacts-list [(selected)]="selectedContact" ></contacts-list>
                 <a id="add" class="text-danger" (click)="onAdd()"><span class="glyphicon glyphicon-plus"></span>Add</a>
         <contact-details [(selected)]="selectedContact"></contact-details>
            <router-outlet> </router-outlet>
    `
})
export class ContactsComponent {

    @ViewChild(ContactDetailsComponent) private contactDetails :ContactDetailsComponent;

    constructor(private dailogService : DialogService) {
    }

    newContact : Contact;
    selectedContact: Contact;

    onAdd() {
        this.selectedContact = {id: null, firstName: '', lastName: '', email: ''};
    }

    canDeactivate() {
       return !this.contactDetails.showEdit;
    }
}