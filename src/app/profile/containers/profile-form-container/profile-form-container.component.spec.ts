import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFormContainerComponent } from './profile-form-container.component';

describe('ProfileFormContainerComponent', () => {
  let component: ProfileFormContainerComponent;
  let fixture: ComponentFixture<ProfileFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
