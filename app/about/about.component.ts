import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable} from "rxjs/observable";

@Component({
    selector : 'contacts',
    template: `
    <h1> About</h1>
    <div class='about'>
    This is demo app about page
    `
})
export class AboutComponent{
    constructor() {

    }
}