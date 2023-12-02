import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingMoviesActionsComponent } from './sorting-movies-actions.component';

describe('SortingMoviesActionsComponent', () => {
  let component: SortingMoviesActionsComponent;
  let fixture: ComponentFixture<SortingMoviesActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortingMoviesActionsComponent]
    });
    fixture = TestBed.createComponent(SortingMoviesActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
