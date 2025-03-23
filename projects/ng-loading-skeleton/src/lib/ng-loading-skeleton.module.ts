import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgLoadingSkeletonComponent } from './ng-loading-skeleton.component';

@NgModule({
  imports: [CommonModule, NgLoadingSkeletonComponent],
  exports: [NgLoadingSkeletonComponent]
})
export class NgLoadingSkeletonModule {}
