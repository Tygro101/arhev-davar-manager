

export class GoogleUserModule{
    authToken   : string;
    email       : string;
    firstName   : string;
    id          : string;
    idToken     : string;
    lastName    : string;
    name        : string;
    photoUrl    : string;
    public constructor(obj?: Partial<GoogleUserModule>) {
        Object.assign(this, obj);
    }
}
