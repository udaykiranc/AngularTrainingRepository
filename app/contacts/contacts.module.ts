import {NgModule} from "@angular/core";
import {ContactsComponent} from "./contacts.component";
import {ContactsListComponent} from "./contacts-list.component";
import {ContactDetailsComponent} from "./contact-details.component";
import {ContactsService} from "./contacts.service";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {LoggerService} from "./logger.service";
import {RouterModule} from "@angular/router";
import {MyUpperPipe} from "./myUpper.pipe";
import {ContactsRoutingModule} from "./contacts-routing.module";

@NgModule({
    imports:[CommonModule, RouterModule, ReactiveFormsModule, FormsModule,  HttpModule, ContactsRoutingModule],
    declarations: [ContactsComponent, ContactsListComponent, ContactDetailsComponent , MyUpperPipe],
    providers: [ContactsService, LoggerService]

})

export class ContactsModule {}