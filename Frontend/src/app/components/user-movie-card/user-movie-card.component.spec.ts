import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMovieCardComponent } from './user-movie-card.component';

describe('UserMovieCardComponent', () => {
  let component: UserMovieCardComponent;
  let fixture: ComponentFixture<UserMovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMovieCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserMovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
