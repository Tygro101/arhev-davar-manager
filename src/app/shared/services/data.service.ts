import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationUser } from 'src/app/store/application-users/application-users.models';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

  }

  validateUser(authToken: string){
    return this.http.get(environment.validateUser, {headers:{accessToken: authToken}});
  }

  getAllUsers(): Observable<Array<ApplicationUser>>{
    return this.http.get<Array<ApplicationUser>>(environment.getAllUsers, {});
  }
}
