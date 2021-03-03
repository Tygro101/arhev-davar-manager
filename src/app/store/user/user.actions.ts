import { Action } from '@ngrx/store';
import { GoogleUserModule } from './user.state';


export const SET_USER = "[User] Set User";
export const VALIDATE_USER = "[User] Validate User";

export class SetUser implements Action{
    readonly type = SET_USER;
    constructor(public payload: GoogleUserModule){

    }
}

export class ValidateUser implements Action{
    readonly type = VALIDATE_USER;
    constructor(public payload: GoogleUserModule){
        
    }
}

export type Actions = SetUser | ValidateUser;

