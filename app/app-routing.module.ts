import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from "./can-deactivate-guard";
import { AboutComponent } from "./about/about.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {ContactDetailsComponent} from "./contacts/contact-details.component";

const routes:Routes =[  
    {path:"contacts", component : ContactsComponent, children:[
       {path:":id", component : ContactDetailsComponent, canDeactivate:[CanDeactivateGuard]},
    ]},
    {path:"about", component : AboutComponent},
    {path:"", redirectTo : 'contacts', pathMatch :`full`}
];

@NgModule({
    imports :[RouterModule.forRoot(routes, {useHash: true})],
    declarations:[],
    providers :[CanDeactivateGuard],
    exports :[RouterModule]
})

export class AppRoutingModule {
    
}