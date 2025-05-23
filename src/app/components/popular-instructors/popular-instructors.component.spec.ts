import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularInstructorsComponent } from './popular-instructors.component';

describe('PopularInstructorsComponent', () => {
  let component: PopularInstructorsComponent;
  let fixture: ComponentFixture<PopularInstructorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularInstructorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularInstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
