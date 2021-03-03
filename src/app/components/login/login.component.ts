import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { ThemePalette } from '@angular/material/core';
import { AppState } from 'src/app/store/state';
import { select, Store } from '@ngrx/store';
import { SetUser, ValidateUser } from 'src/app/store/user/user.actions';
import { getUser } from 'src/app/store/user/user.selectors';
import { GoogleUserModule } from 'src/app/store/user/user.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any;
  loggedIn: boolean;
  showLoading: boolean = true;
  color: ThemePalette = 'warn'

  constructor(private authService: SocialAuthService, private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = !user;
      this.showLoading = !!user;
      if(user) this.store.dispatch(new ValidateUser(user));
    });
    this.store.pipe(select(getUser)).subscribe((user: GoogleUserModule)=>{
      if(user && user.authToken){
        this.router.navigate(['main']);
      }
    })
  }
  doGoogleLogin(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user=>{
      if(user) this.store.dispatch(new ValidateUser(user));
    });
  }
}
