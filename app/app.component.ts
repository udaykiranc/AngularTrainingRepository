import {Component, OnInit, OnDestroy} from '@angular/core';
import {Contact} from "./contact.interface";
import {ContactsService} from "./contacts.service";
import {Observable} from "rxjs/observable";

@Component({
    selector: 'my-app',
    template: `
         <contacts-list [(selected)]="selectedContact"></contacts-list>
                 <a id="add" href="#" class="text-danger" (click)="onAdd()"><span class="glyphicon glyphicon-plus"></span>Add</a>
         <contact-details [(selected)]="selectedContact"></contact-details>
    `
})
export class AppComponent {





    constructor() {

    }


    selectedContact: Contact;

    onAdd() {
        this.selectedContact = {id: null, firstName: '', lastName: '', email: ''};
    }


}