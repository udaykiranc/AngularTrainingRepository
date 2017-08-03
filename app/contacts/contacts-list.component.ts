import {Component, OnInit, Output, EventEmitter, Input} from "@angular/core";
import {ContactsService} from "./contacts.service";
import {Contact} from "./contact.interface";

@Component({
    selector: 'contacts-list',
    template: `
        <ul *ngIf="people">
              <li *ngFor="let contact of people" class="item" [class.active]="selectedContact==contact" >
                       <a (click)="onSelect(contact)">{{contact.firstName | myUpper}} {{contact.lastName | myUpper}}</a>
                      <a (click)="remove(contact)" class="remove" title="Remove"><span class="glyphicon glyphicon-remove-sign"></span></a>
              
            </li>
        </ul>
    `,
})

export class ContactsListComponent implements OnInit {
    @Input() selected: Contact;
    @Output() selectedChange = new EventEmitter<Contact>();
    
    @Input() set newContactAdded(newContact :Contact) {
        this.getAll()
    }


    selectedContact: Contact;


    people: Contact[];

    constructor(private contactsService: ContactsService) {



    }

    remove(person: Contact) {
        if(this.selected && person.id==this.selected.id ) {
            this.selected = null
            this.selectedChange.emit(this.selected)
        }

        this.contactsService.remove(person.id).subscribe((res) => {
            console.log("removed contact");
            this.getAll();

        });
    }

    getAll() {
        this.contactsService.getAll().subscribe((peopleFromServer: Contact[]) => {
            this.people = peopleFromServer;
        });
    }

    onSelect(contact: Contact) {

        this.selectedChange.emit(contact);

    }


    ngOnInit() {
        this.contactsService.getAll().subscribe((peopleFromTheServer:Contact[]) => {
            this.people = peopleFromTheServer;
        })

    }
}