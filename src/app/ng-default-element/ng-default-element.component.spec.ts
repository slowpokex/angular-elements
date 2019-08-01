import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDefaultElementComponent } from './ng-default-element.component';

describe('NgDefaultElementComponent', () => {
  let component: NgDefaultElementComponent;
  let fixture: ComponentFixture<NgDefaultElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDefaultElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDefaultElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
