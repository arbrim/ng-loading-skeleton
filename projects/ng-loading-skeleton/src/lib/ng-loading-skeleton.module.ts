import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgLoadingSkeletonComponent } from './ng-loading-skeleton.component';
import { NgLoadingSkeletonWrapperComponent } from './ng-loading-skeleton-wrapper.component';

@NgModule({
  declarations: [NgLoadingSkeletonWrapperComponent],
  imports: [CommonModule, NgLoadingSkeletonComponent],
  exports: [NgLoadingSkeletonWrapperComponent]
})
export class NgLoadingSkeletonModule {}
