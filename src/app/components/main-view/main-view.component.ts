import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { title } from 'process';
import { ApplicationUser } from 'src/app/store/application-users/application-users.models';
import { getTitlesSet, getUsersData } from 'src/app/store/application-users/application-users.selectors';
import { TitleSet } from 'src/app/store/application-users/application-users.state';

import { AppState } from 'src/app/store/state';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  users: ApplicationUser[];
  titles: Array<TitleSet>;

  constructor(private store: Store<AppState>) {
    this.store.pipe(select(getTitlesSet)).subscribe((titles: Array<TitleSet>) => {
      this.titles = titles;
    });
    this.store.pipe(select(getUsersData)).subscribe((users: Array<ApplicationUser>) => {
      this.users = users;
    });
  }

  onHeaderClick(header: string): void {
    this.users = [...this.users].sort((a, b) => {
      return b[header] - a[header];
    });
  }
  ngOnInit(): void {
  }

}
