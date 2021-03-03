import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTableRowComponent } from './manager-table-row.component';

describe('ManagerTableRowComponent', () => {
  let component: ManagerTableRowComponent;
  let fixture: ComponentFixture<ManagerTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerTableRowComponent);
    component = fixture.componentInstance; 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
