/* Copyright (C) 2017 Centroida & ITCE - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the Prometheus courses license.
 *
 * You should have received a copy of the Prometheus courses
 * license.If not, please write to: info@itce.com
 * or to prometheus@itce.com
 */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {ContactsService} from "./contacts/contacts.service";
import {ContactsListComponent} from "./contacts/contacts-list.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {ContactDetailsComponent} from "./contacts/contact-details.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {LoggerService} from "./logger.service";
import {ContactsLoggerService} from "./contacts/contactsLogger.service";
import {HighlightDirective} from "./highlight.directive";
import {MyUpperPipe} from "./myUpper.pipe";
import {HttpModule} from "@angular/http";
import { AboutComponent } from "./about/about.component";
import {CanDeactivateGuard} from './can-deactivate-guard';
import { DialogService } from "./dialog.service";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule , HttpModule, AppRoutingModule],
  declarations: [ AppComponent, AboutComponent, ContactsComponent, ContactsListComponent, ContactDetailsComponent, HighlightDirective, MyUpperPipe ],
  bootstrap:    [ AppComponent ],
  providers: [ContactsService, DialogService, CanDeactivateGuard, [{ provide: LoggerService, useClass: ContactsLoggerService}]]
})

export class AppModule {}