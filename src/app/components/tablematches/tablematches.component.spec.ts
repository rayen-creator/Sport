import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablematchesComponent } from './tablematches.component';

describe('TablematchesComponent', () => {
  let component: TablematchesComponent;
  let fixture: ComponentFixture<TablematchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablematchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablematchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
