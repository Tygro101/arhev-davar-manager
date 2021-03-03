import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { title } from 'process';
import { ApplicationUser } from 'src/app/store/application-users/application-users.models';
import { TitleSet } from 'src/app/store/application-users/application-users.state';

@Component({
  selector: 'manager-table-row',
  templateUrl: './manager-table-row.component.html',
  styleUrls: ['./manager-table-row.component.scss']
})
export class ManagerTableRowComponent implements OnInit {
  @Input() isHeader: boolean = false;
  @Input() row: ApplicationUser;
  @Input() titles: Array<Title>;
  @Output() onHeaderClick: EventEmitter<string> = new EventEmitter();
  keys: Array<string>;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void{

  }

}
