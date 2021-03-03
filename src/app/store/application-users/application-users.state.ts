import { ApplicationUser } from "./application-users.models";



export class ApplicationUsersState {
    users: Array<ApplicationUser>;
    titles: Array<TitleSet>;
    public constructor(obj?: Partial<ApplicationUsersState>) {
        Object.assign(this, obj);
    }
}


export interface TitleSet {
    key: string;
    title: string;
}