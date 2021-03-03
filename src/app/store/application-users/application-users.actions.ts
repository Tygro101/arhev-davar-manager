import { Action } from '@ngrx/store';
import { ApplicationUser } from './application-users.models';


export const GET_ALL_USERS = "[Applications Users] Get Applications Users";
export const SET_ALL_USERS = "[Applications Users] Set Applications Users";

export class GetAllUsers implements Action{
    readonly type = GET_ALL_USERS;
    constructor(){

    }
}

export class SetAllUsers implements Action{
    readonly type = SET_ALL_USERS;
    constructor(public payload: Array<ApplicationUser>){

    }
}

export type Actions = GetAllUsers | SetAllUsers;

