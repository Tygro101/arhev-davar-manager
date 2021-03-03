import { ApplicationUsersState } from './application-users/application-users.state';
import { GoogleUserModule } from './user/user.state';



export interface AppState {
    user: GoogleUserModule;
    applicationUsers: ApplicationUsersState;
}




