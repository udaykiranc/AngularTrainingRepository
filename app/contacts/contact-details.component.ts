import {Component, Input, EventEmitter, Output} from "@angular/core";
import {Contact} from "./contact.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactsService} from "./contacts.service";

@Component({
    selector: 'contact-details',
    template: `        <div id="contactsDetailsContainer" *ngIf="contact">
            <span *ngIf="!showEdit">
                <label>First Name: </label><b>{{contact.firstName}}</b><br/>
                <label>Last Name: </label><b>{{contact.lastName}}</b><br/>
                <label>email: </label><b>{{contact.email}}</b><br/>
                <label></label><a class="text-danger" (click)="showEdit=true"><span class="glyphicon glyphicon-edit"></span>Edit</a><br/>
            </span>
            
       
            <form  [formGroup]="contactForm"  (ngSubmit)="onSubmit()" *ngIf="showEdit" novalidate>
                <label for="firstName">First Name: </label>
                <input id="firstName" name="firstName" formControlName="firstName" [ngModel]="contact.firstName" ><br/>
                <div class="alert alert-danger" role="alert" *ngIf="contactForm.controls.firstName && !contactForm.controls.firstName.pristine && !contactForm.controls.firstName.valid">First name is required</div>
                
                <label for="lastName">Last Name: </label>
                <input id="lastName" name="lastName" formControlName="lastName" [ngModel]="contact.lastName"><br/>
                <div class="alert alert-danger" role="alert" *ngIf="contactForm.controls.lastName && !contactForm.controls.lastName.pristine && !contactForm.controls.lastName.valid">Last name is required</div>
                
                <label for="email">Email: </label>
                <input id="email" name="email" formControlName="email" [ngModel]="contact.email" email><br/>
                <div class="alert alert-danger" role="alert" *ngIf="contactForm.controls.email && !contactForm.controls.email.pristine && !contactForm.controls.email.valid">Email is invalid</div>
                
                
                <label></label>
                <input type="submit" class="btn btn-danger" value="{{ !contact.id ? 'Add' : 'Save' }}" [disabled]="contactForm.invalid || contactForm.pristine" />
                <a href="#" class="text-danger" (click)="onCancel()">Cancel</a>
            </form>
            
  
        </div>`

})


export class ContactDetailsComponent {
    showEdit: boolean;
    contact: Contact;

    contactForm:FormGroup;


    @Input() set selected(_contact: Contact) {
        this.contactForm.reset();
        if (_contact && _contact.id == null) {
            this.showEdit = true;
        } else {
            this.showEdit = false;
        }
        this.contact = _contact;

    }

    @Output() newContactAdded = new EventEmitter<Contact>();
    @Output() selectedChange = new EventEmitter<Contact>();


    constructor(private contactService:ContactsService, private fb:FormBuilder) {
        this.contactForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.email ]
        })


    }

    onCancel() {
        this.contact = undefined;
        this.selectedChange.emit(this.contact);
    }

    onSubmit() {
        if(! this.contactForm.valid) return;

        let dirtyContact: Contact = this.contactForm.value;
        dirtyContact.id = this.contact.id;

        if(this.contact.id === null)
            this.contactService.add(dirtyContact).subscribe((res) =>{
                this.contactForm.reset();
                this.showEdit = false;
                this.contact = res;
                this.newContactAdded.emit(this.contact);
            }) ;
        else
            this.contactService.update(dirtyContact).subscribe((res) => {
                this.contact = res;
                this.selectedChange.emit(this.contact);
            });

        this.contact = dirtyContact;

        this.contactForm.reset();
        //this.contactChange.emit(this.contact);

        this.showEdit = false
    }

}