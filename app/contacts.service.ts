
import {Injectable} from "@angular/core";
import {Contact} from "./contact.interface";
@Injectable()

export class ContactsService {

    static _contactId = 1;

    private _CONTACTS:Contact[] = [
        { id: ContactsService._contactId++, firstName: "Max", lastName: "Smith", email: "max@gmail.com" },
        { id: ContactsService._contactId++, firstName: "Chris", lastName: "Raches", email: "chris@gmail.com" },
        { id: ContactsService._contactId++, firstName: "Michael", lastName: "Alloy", email: "michael@gmail.com" },
        { id: ContactsService._contactId++, firstName: "John", lastName: "Doe", email: "john@gmail.com" },
        { id: ContactsService._contactId++, firstName: "Jenny", lastName: "Doe", email: "jenny@gmail.com" }
    ];



    getAll() {
        return this._CONTACTS;
    }

    constructor() {
        console.log('I am alive!')
    }

    update(contact: Contact) {
        let ind = this.findIndexById(contact.id);
        if( ind<0 ) return null;

        this._CONTACTS.splice( ind, 1, contact );

        return contact.id;
    }

    add(contact: Contact) {
        contact.id = ContactsService._contactId++;

        this._CONTACTS.push( contact );

        return contact.id;
    }

    private findById(contactId: number): Contact {
        return this._CONTACTS.find(row => row.id == contactId )
    }

    private findIndexById(contactId: number) {
        let contact = this.findById(contactId);
        if( !contact ) return -1;

        return this._CONTACTS.indexOf(contact);
    }

}