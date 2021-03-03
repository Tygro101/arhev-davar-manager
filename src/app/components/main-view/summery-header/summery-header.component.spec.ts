import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummeryHeaderComponent } from './summery-header.component';

describe('SummeryHeaderComponent', () => {
  let component: SummeryHeaderComponent;
  let fixture: ComponentFixture<SummeryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummeryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummeryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
