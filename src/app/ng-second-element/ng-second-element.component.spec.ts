import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSecondElementComponent } from './ng-second-element.component';

describe('NgSecondElementComponent', () => {
  let component: NgSecondElementComponent;
  let fixture: ComponentFixture<NgSecondElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSecondElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSecondElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
