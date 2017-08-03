import {Injectable} from "@angular/core";
import {Contact} from "./contact.interface";
import {LoggerService} from "./logger.service";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import {Observable} from "rxjs/Observable";

const CONTACTS_URL = 'contacts.json';


@Injectable()

export class ContactsService {

    static _contactId = 1;


    constructor(private logger: LoggerService, private http: Http) {
        logger.log()
    }


    getAll(): Observable<Contact[]> {
        return this.http.get(CONTACTS_URL)
            .map((res: Response) => {
                let data:Contact[] = this.extractData(res)
                data.map((val) => { ContactsService._contactId = Math.max(val.id, ContactsService._contactId) })
                ContactsService._contactId++;
                return data;
            })
            .catch(this.handleError)
    }


    update(contact: Contact) {


    }

    add(contact: Contact) {


    }

    remove(id: number) {


    }

    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body || { };
    }

    handleError(error:any) {
        return Observable.throw('Error!');

    }





}