import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <ul>
            <li [routerLinkActive]="['active']"><a [routerLink]="['/contacts']">Contacts</a></li>
            <li><a [routerLink]="['/about']" [routerLinkActive]="['active']">About</a></li>
        </ul>
        
  
        <router-outlet></router-outlet>
    `
})
export class AppComponent {





    constructor() {

    }


}