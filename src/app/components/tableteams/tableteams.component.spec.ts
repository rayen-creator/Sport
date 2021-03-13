import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableteamsComponent } from './tableteams.component';

describe('TableteamsComponent', () => {
  let component: TableteamsComponent;
  let fixture: ComponentFixture<TableteamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableteamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
