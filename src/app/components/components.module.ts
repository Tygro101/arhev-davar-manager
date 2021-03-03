
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MainViewComponent } from './main-view/main-view.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { ManagerTableRowComponent } from './main-view/manager-table-row/manager-table-row.component';
import { SummeryHeaderComponent } from './main-view/summery-header/summery-header.component';

const socialAuthConfig: SocialAuthServiceConfig = {
    autoLogin: true, 
    providers: [
        {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
                
            ),
        }
    ],
}

@NgModule({
    declarations: [MainViewComponent, LoginComponent, ManagerTableRowComponent, SummeryHeaderComponent],
    exports: [],
    imports: [SharedModule, CommonModule, FormsModule, SocialLoginModule],
    providers: [{
        provide: 'SocialAuthServiceConfig',
        useValue: socialAuthConfig
    }]
})
export class ComponentsModule { }
