import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestureEditComponent } from './gesture-edit.component';

describe('GestureEditComponent', () => {
  let component: GestureEditComponent;
  let fixture: ComponentFixture<GestureEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestureEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
