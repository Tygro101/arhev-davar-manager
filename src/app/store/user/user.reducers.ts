

import { Actions, SET_USER } from './user.actions';
import { GoogleUserModule } from './user.state';
import * as UserActions from './user.actions';



const initState: GoogleUserModule = new GoogleUserModule({});


export function userReducer(state: GoogleUserModule = initState, action: Actions): GoogleUserModule {
    switch (action.type) {
        case SET_USER:
            return action.payload;
        default:
            return state;
    }
}




