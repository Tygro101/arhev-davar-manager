import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUser } from 'src/app/store/user/user.selectors';
import { GoogleUserModule } from 'src/app/store/user/user.state';
import { AppState } from 'src/app/store/state';






@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
    private user: GoogleUserModule;
    constructor(private store: Store<AppState>) {
        this.store.pipe(select(getUser)).subscribe((user: GoogleUserModule)=>{
            this.user = user;
        })
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(this.applyHeaders(req))
    }

    applyHeaders(req: HttpRequest<any>): HttpRequest<any> {
        if(!this.user || !this.user.authToken) return req;
        return req.clone({ 
            setHeaders: {
                //idToken: this.userDetailsService.getUser().idToken,
                accessToken: this.user.authToken
            }
        });
    }

}