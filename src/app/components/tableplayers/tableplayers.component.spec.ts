import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableplayersComponent } from './tableplayers.component';

describe('TableplayersComponent', () => {
  let component: TableplayersComponent;
  let fixture: ComponentFixture<TableplayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableplayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
