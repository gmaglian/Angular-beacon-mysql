import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserdeviceidComponent } from './add-userdeviceid.component';

describe('AddUserdeviceidComponent', () => {
  let component: AddUserdeviceidComponent;
  let fixture: ComponentFixture<AddUserdeviceidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserdeviceidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserdeviceidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
