import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './components/main-view/main-view.component';
import { LoginComponent } from '@components/login/login.component';
import { AuthGuard } from './core/guards/routing.guard';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'main', component: MainViewComponent, canActivate: [AuthGuard] },
  { path: '**', component: LoginComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
