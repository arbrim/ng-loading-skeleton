import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLoadingSkeletonComponent } from './ng-loading-skeleton.component';

describe('NgLoadingSkeletonComponent', () => {
  let component: NgLoadingSkeletonComponent;
  let fixture: ComponentFixture<NgLoadingSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgLoadingSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgLoadingSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
