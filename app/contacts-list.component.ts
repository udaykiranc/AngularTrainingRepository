

import {Component, OnInit, Output, EventEmitter, Input} from "@angular/core";
import {ContactsService} from "./contacts.service";
import {Contact} from "./contact.interface";

@Component({
    selector: 'contacts-list',
    template: `
        <ul>
              <li *ngFor="let contact of people" class="item" [class.active]="selectedContact==contact" >
                       <a (click)="onSelect(contact)">{{contact.firstName}} {{contact.lastName | uppercase}}</a>
              
            </li>
        </ul>
    `
})

export class ContactsListComponent implements OnInit{
    @Input()  selected:Contact;
    @Output() selectedChange = new EventEmitter<Contact>();


    selectedContact:Contact;


    people: Contact[];

    constructor(private contactsService: ContactsService) {

    }


    onSelect(contact:Contact) {

        this.selectedChange.emit(contact);

    }


    remove() {

    }

    ngOnInit() {
        this.people = this.contactsService.getAll();
    }
}