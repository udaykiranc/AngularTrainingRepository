import {Component, OnInit, Output, EventEmitter, Input} from "@angular/core";
import {ContactsService} from "./contacts.service";
import {Contact} from "./contact.interface";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'contacts-list',
    template: `
        <ul *ngIf="people">
              <li *ngFor="let contact of people" class="item" [class.active]="selected==contact?.id" >
                       <a (click)="onSelect(contact)">{{contact.firstName | myUpper}} {{contact.lastName | myUpper}}</a>
                      <a (click)="remove(contact)" class="remove" title="Remove"><span class="glyphicon glyphicon-remove-sign"></span></a>
             
            </li>
        </ul>
    `,
})

export class ContactsListComponent implements OnInit {



    selectedContact: Contact;
    selected:number;
    people: Contact[];

    constructor(private contactsService: ContactsService,
                private router: Router) {


    }

    remove(person: Contact) {
        this.contactsService.remove(person.id).subscribe((res) => {
            console.log('Handle successful deletion!');
            this.getAll();

        })
    }


    onSelect(contact: Contact) {
        this.selected = contact.id;
        this.router.navigate(['/contacts', contact.id])

    }

    getAll() {
        this.contactsService.getAll().subscribe((peopleFromTheServer: Contact[]) => {
            this.people = peopleFromTheServer;
        })
    }


    ngOnInit() {
        this.getAll();

    }


}