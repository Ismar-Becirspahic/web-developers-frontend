import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileViewContainerComponent } from './profile-view-container.component';

describe('ProfileViewContainerComponent', () => {
  let component: ProfileViewContainerComponent;
  let fixture: ComponentFixture<ProfileViewContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileViewContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
