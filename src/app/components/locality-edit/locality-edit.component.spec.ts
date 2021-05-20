import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalityEditComponent } from './locality-edit.component';

describe('LocalityEditComponent', () => {
  let component: LocalityEditComponent;
  let fixture: ComponentFixture<LocalityEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalityEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
