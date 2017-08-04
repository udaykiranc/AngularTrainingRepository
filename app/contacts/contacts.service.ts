import {Injectable} from "@angular/core";
import {Contact} from "./contact.interface";
import {LoggerService} from "./logger.service";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import {Observable} from "rxjs/Observable";

const CONTACTS_URL = "http://localhost:9191/contacts";


@Injectable()

export class ContactsService {


    constructor(private logger: LoggerService, private http: Http) {
        logger.log();
    }


    getAll(): Observable<Contact[]> {
        return this.http.get(CONTACTS_URL)
            .map((res: Response) => {
                return res.json() as Contact[];

            })
            .catch(this.handleError)
    }

    get(id: number) {
        return this.http.get(`${CONTACTS_URL}/${id}`)
            .map((res) => res.json() as Contact)
    }


    update(contact: Contact) {
        return this.http.put(`${CONTACTS_URL}/${contact.id}`, contact)
            .map((res) => res.json() as Contact)

    }

    add(contact: Contact): Observable<Contact> {
        return this.http.post(CONTACTS_URL, contact)
            .map(res => res.json() as Contact);


    }

    remove(id: number): Observable<any> {
        return this.http.delete(`${CONTACTS_URL}/${id}`)
            .catch(this.handleError)


    }


    handleError(error: any) {
        return Observable.throw('Error!');

    }


}