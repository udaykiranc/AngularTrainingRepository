import {Injectable} from "@angular/core";
import {Contact} from "./contact.interface";
import {LoggerService} from "../logger.service";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import {Observable} from "rxjs/Observable";

const CONTACTS_URL = 'http://localhost:9191/contacts';


@Injectable()

export class ContactsService {

    constructor(private logger: LoggerService, private http: Http) {
        logger.log()
    }


    getAll(): Observable<Contact[]> {
        return this.http.get(CONTACTS_URL)
            .map((res: Response) => {
                let data:Contact[] = this.extractData(res)
                return data;
            })
            .catch(this.handleError)
    }


    update(contact: Contact) {
        return this.http.put(`${CONTACTS_URL}/${contact.id}`,contact).map((res)=>{
            console.log("updated contact");
            return res.json;
        }).catch(this.handleError);

    }

    add(contact: Contact) :Observable<Contact>{
        return this.http.post(`${CONTACTS_URL}`,contact).map((res)=>{
            console.log("Added new contact");
            return res.json;
        }).catch(this.handleError);

    }

    remove(id: number) {
        return this.http.delete(`${CONTACTS_URL}/${id}`).map((res) =>{
            console.log("removed" );
        }).catch(this.handleError);

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