import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileSwipePage } from './profile-swipe.page';

describe('ProfileSwipePage', () => {
  let component: ProfileSwipePage;
  let fixture: ComponentFixture<ProfileSwipePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSwipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
