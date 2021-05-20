import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeaconComponent } from './add-beacon.component';

describe('AddBeaconComponent', () => {
  let component: AddBeaconComponent;
  let fixture: ComponentFixture<AddBeaconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBeaconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBeaconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
