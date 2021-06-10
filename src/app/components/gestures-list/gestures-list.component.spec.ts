import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestureListComponent } from './gestures-list.component';

describe('GestureListComponent', () => {
  let component: GestureListComponent;
  let fixture: ComponentFixture<GestureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestureListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
