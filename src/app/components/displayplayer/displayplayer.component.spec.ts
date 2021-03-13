import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayplayerComponent } from './displayplayer.component';

describe('DisplayplayerComponent', () => {
  let component: DisplayplayerComponent;
  let fixture: ComponentFixture<DisplayplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
