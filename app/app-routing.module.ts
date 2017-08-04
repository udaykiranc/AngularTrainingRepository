import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {CanDeactivateGuard} from "./can-deactivate.guard";


const routes: Routes = [
    //loadChildren loads a module from the route, making sure route paths don't overlap
    { path: 'contacts', loadChildren: 'app/contacts/contacts.module#ContactsModule' },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/contacts', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    declarations: [],
    providers: [CanDeactivateGuard],
    exports: [RouterModule]

})

export class AppRoutingModule {
}