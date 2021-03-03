import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { SetUser, ValidateUser, VALIDATE_USER } from './user/user.actions';
import { AppState } from './state';
import { map, mergeMap, catchError, concatMap, switchMap } from 'rxjs/operators';
import { DataService } from '@shared/services/data.service';
import { GetAllUsers, GET_ALL_USERS, SetAllUsers } from './application-users/application-users.actions';
import { ApplicationUser } from './application-users/application-users.models';


@Injectable()
export class AppEffects {


    validateUser$ = createEffect(() => this.actions$.pipe(ofType(VALIDATE_USER), mergeMap((action: ValidateUser) =>
        this.dataService.validateUser(action.payload.authToken).pipe(switchMap(res => {
            return [new SetUser(action.payload), new GetAllUsers()]
        }), catchError(e => {
            console.log(e);
            return []
        })
        ))
    ));


    getAllUsers$ = createEffect(() => this.actions$.pipe(ofType(GET_ALL_USERS), mergeMap((action: GetAllUsers) =>
        this.dataService.getAllUsers().pipe(switchMap((res: Array<ApplicationUser>) => {
            return [new SetAllUsers(res)];
        }), catchError(e => {
            console.log(e);
            return []
        })
        ))
    ));




    constructor(private actions$: Actions, private dataService: DataService) {
    }

}



