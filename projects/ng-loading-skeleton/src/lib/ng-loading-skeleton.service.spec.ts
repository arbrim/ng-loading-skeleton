import { TestBed } from '@angular/core/testing';

import { NgLoadingSkeletonService } from './ng-loading-skeleton.service';

describe('NgLoadingSkeletonService', () => {
  let service: NgLoadingSkeletonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgLoadingSkeletonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
