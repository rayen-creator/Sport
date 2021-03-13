import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsplayerComponent } from './newsplayer.component';

describe('NewsplayerComponent', () => {
  let component: NewsplayerComponent;
  let fixture: ComponentFixture<NewsplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
