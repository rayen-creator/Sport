import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayteamComponent } from './displayteam.component';

describe('DisplayteamComponent', () => {
  let component: DisplayteamComponent;
  let fixture: ComponentFixture<DisplayteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
