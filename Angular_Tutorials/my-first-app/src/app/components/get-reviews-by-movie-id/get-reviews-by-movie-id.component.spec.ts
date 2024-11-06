import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReviewsByMovieIdComponent } from './get-reviews-by-movie-id.component';

describe('GetReviewsByMovieIdComponent', () => {
  let component: GetReviewsByMovieIdComponent;
  let fixture: ComponentFixture<GetReviewsByMovieIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetReviewsByMovieIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetReviewsByMovieIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
