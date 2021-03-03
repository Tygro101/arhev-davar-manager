import { Component, Input, OnInit } from '@angular/core';
import { ApplicationUser } from 'src/app/store/application-users/application-users.models';

const IGNORE_PAID: { [key: string]: boolean } = { 
  ['mandel1475@gmail.com']: true, 
  ['tayebran@gmail.com']: true,
  ['neriya5555@gmail.com']: true,
  ['avkliger@gmail.com']: true
};
@Component({
  selector: 'app-summery-header',
  templateUrl: './summery-header.component.html',
  styleUrls: ['./summery-header.component.scss']
})
export class SummeryHeaderComponent implements OnInit {
  private _users: Array<ApplicationUser>;
  paidUsers: number;
  notUsed: number;
  freeUsers: number;
  get users(): Array<ApplicationUser> {
    return this._users;
  }
  @Input() set users(value: Array<ApplicationUser>) {
    this._users = value;
    this.setCounts();
  }
  totalUsers: number;
  constructor() { }

  ngOnInit(): void {

  }

  setCounts(): void {
    this.totalUsers = this.users && this.users.length;
    this.paidUsers = this.users && this.users.reduce((res: number, user: ApplicationUser) => {
      if ((user.usedNumberOfTest > 2 || user.remainNumberOfTest > 2) && !IGNORE_PAID[user.userId] ) {
        res++;
      }
      return res;
    }, 0);
    this.notUsed = this.users && this.users.reduce((res: number, user: ApplicationUser) => {
      if ((user.remainNumberOfTest === 2 && !user.usedNumberOfTest)) {
        res++;
      }
      return res;
    }, 0);
    this.freeUsers = this.users && this.users.reduce((res: number, user: ApplicationUser) => {
      if ((user.usedNumberOfTest === 2 && !user.remainNumberOfTest)) {
        res++;
      }
      return res;
    }, 0);
  }

}
