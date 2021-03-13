import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacthesComponent } from './macthes.component';

describe('MacthesComponent', () => {
  let component: MacthesComponent;
  let fixture: ComponentFixture<MacthesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacthesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacthesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
