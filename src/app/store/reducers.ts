import { AppState } from './state';
import { ActionReducerMap } from '@ngrx/store';
import { userReducer } from './user/user.reducers';
import { ApplicationUsersReducer } from './application-users/application-users.reducers';








export const reducers: ActionReducerMap<AppState> = {
    user: userReducer,
    applicationUsers: ApplicationUsersReducer
};



