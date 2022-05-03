import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileListContainerComponent } from './profile-list-container.component';

describe('ProfileListContainerComponent', () => {
  let component: ProfileListContainerComponent;
  let fixture: ComponentFixture<ProfileListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
