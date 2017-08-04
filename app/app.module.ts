/* Copyright (C) 2017 Centroida & ITCE - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the Prometheus courses license.
 *
 * You should have received a copy of the Prometheus courses
 * license.If not, please write to: info@itce.com
 * or to prometheus@itce.com
 */

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';
import {AboutComponent} from "./about/about.component";
import {DialogService} from "./dialog.service";
import {AppRoutingModule} from "./app-routing.module";
// Not needed because it is lazily-loaded
import {ContactsModule} from "./contacts/contacts.module";

@NgModule({
    imports: [BrowserModule, AppRoutingModule],
    declarations: [
        AppComponent,
        AboutComponent],
    bootstrap: [AppComponent],
    providers: [DialogService]
})

export class AppModule {
}