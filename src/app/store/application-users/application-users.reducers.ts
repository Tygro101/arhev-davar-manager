


import { ApplicationUsersState } from './application-users.state';
import { Actions, GET_ALL_USERS, SET_ALL_USERS } from './application-users.actions';




const initState: ApplicationUsersState = new ApplicationUsersState({
    titles:[
        {key:'userId', title: "User Id"},
        {key:'remainNumberOfTest', title: "Remain coins"},
        {key:'usedNumberOfTest', title: "Used coins"}
    ]
});


export function ApplicationUsersReducer(state: ApplicationUsersState = initState, action: Actions): ApplicationUsersState {
    switch (action.type) {
        case SET_ALL_USERS:
            return {...state, users: action.payload};
        default:
            return state;
    }
}




