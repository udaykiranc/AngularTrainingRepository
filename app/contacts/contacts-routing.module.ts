import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CanDeactivateGuard} from "../can-deactivate.guard";
import {ContactDetailsComponent} from "./contact-details.component";
import {ContactsComponent} from "./contacts.component";



const routes: Routes = [
    // Actually refers to /contacts because it is lazily-loaded.
    { path: '',       component: ContactsComponent, children: [
        { path: ':id',   component: ContactDetailsComponent, canDeactivate: [CanDeactivateGuard] },
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations:[],
    providers: [CanDeactivateGuard],
    exports:[RouterModule]

})

export class ContactsRoutingModule{}