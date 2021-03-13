import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResMatchesComponent } from './res-matches.component';

describe('ResMatchesComponent', () => {
  let component: ResMatchesComponent;
  let fixture: ComponentFixture<ResMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
