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
import {ContactsService} from "./contacts.service";
import {ContactsListComponent} from "./contacts-list.component";
import {ContactDetailsComponent} from "./contact-details.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, ContactsListComponent, ContactDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ContactsService]
})

export class AppModule {}