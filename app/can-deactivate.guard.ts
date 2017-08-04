import {Observable} from "rxjs";
import {CanDeactivate} from "@angular/router";
export interface CanComponentDeactivate {
    canDeactivate: () => boolean | Promise<boolean>
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate): Promise<boolean> | boolean {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
