import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name : 'myUpper'})
export class myUpper  implements PipeTransform {
    transform(value : string) : string {
        return value && value.toUpperCase();
    }
}