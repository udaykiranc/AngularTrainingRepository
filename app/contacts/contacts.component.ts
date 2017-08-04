import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {Contact} from "./contact.interface";
import {Observable} from "rxjs/observable";
import 'rxjs/observable/fromPromise'
import {ContactDetailsComponent} from "./contact-details.component";
import {DialogService} from "../dialog.service";


@Component({
    template: `
         <contacts-list></contacts-list>
                 <a id="add"  class="text-danger" (click)="onAdd()"><span class="glyphicon glyphicon-plus"></span>Add</a>
        <router-outlet></router-outlet>
    `
})
export class ContactsComponent {


    @ViewChild(ContactDetailsComponent) private contactDetailsComponent: ContactDetailsComponent


    constructor(private dialogService: DialogService) {

    }


    selectedContact: Contact;


    onAdd() {
        this.selectedContact = {id: null, firstName: '', lastName: '', email: ''};
    }


    canDeactivate() {
        if (!this.contactDetailsComponent.showEdit)
            return true;


        return this.dialogService.confirm('Are you sure?')


    }


}