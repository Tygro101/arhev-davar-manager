import { Injectable } from "@angular/core";
import { CanActivate, UrlTree, Router } from '@angular/router';
import { select, Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { AppState } from "src/app/store/state";
import { getUser } from "src/app/store/user/user.selectors";
import { GoogleUserModule } from "src/app/store/user/user.state";


@Injectable({providedIn:"root"})
export class AuthGuard implements CanActivate {
    user: GoogleUserModule;
    constructor(private store: Store<AppState>, private router: Router) {
        this.store.pipe(select(getUser)).subscribe((user: GoogleUserModule)=>{
            this.user = user;
        })
    }

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (!(this.user && this.user.authToken)) {
            this.router.navigate(['/login'])
        }
        return !!(this.user && this.user.authToken);
    }
}