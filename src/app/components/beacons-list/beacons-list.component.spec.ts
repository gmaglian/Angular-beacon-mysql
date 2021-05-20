import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeaconsListComponent } from './beacons-list.component';

describe('BeaconsListComponent', () => {
  let component: BeaconsListComponent;
  let fixture: ComponentFixture<BeaconsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeaconsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeaconsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
