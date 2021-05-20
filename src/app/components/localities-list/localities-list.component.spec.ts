import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalitiesListComponent } from './localities-list.component';

describe('LocalitiesListComponent', () => {
  let component: LocalitiesListComponent;
  let fixture: ComponentFixture<LocalitiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalitiesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
