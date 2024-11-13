import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewByUserComponent } from './add-review-by-user.component';

describe('AddReviewByUserComponent', () => {
  let component: AddReviewByUserComponent;
  let fixture: ComponentFixture<AddReviewByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddReviewByUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddReviewByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
