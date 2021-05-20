import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatersListComponent } from './theaters-list.component';

describe('TheatersListComponent', () => {
  let component: TheatersListComponent;
  let fixture: ComponentFixture<TheatersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheatersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
