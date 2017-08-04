import {Injectable} from "@angular/core";
import {LoggerService} from "./logger.service";
@Injectable()


export class ContactsLoggerService extends LoggerService {

    constructor() {
        super();
    }


    log(message?:string):void {
        message ? console.log(message) : console.log('Contacts logger!')
    }
}