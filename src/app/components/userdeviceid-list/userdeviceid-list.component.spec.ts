import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdeviceidListComponent } from './userdeviceid-list.component';

describe('UserdeviceidListComponent', () => {
  let component: UserdeviceidListComponent;
  let fixture: ComponentFixture<UserdeviceidListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdeviceidListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdeviceidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
