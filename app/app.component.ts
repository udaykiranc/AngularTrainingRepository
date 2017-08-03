import {Component, OnInit, OnDestroy} from '@angular/core';
import {Contact} from "./contacts/contact.interface";
import {ContactsService} from "./contacts/contacts.service";
import {Observable} from "rxjs/observable";

@Component({
    selector: 'my-app',
    template: `
    <ul>
        <li [routerLinkActive]="['active']"> <a [routerLink]="['/contacts']">Contacts</a></li>
        <li> <a [routerLink]="['/about']">About</a> </li>
    </ul>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
    constructor() {

    }
}