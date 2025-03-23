import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-loading-skeleton',
  template: `
    <ng-loading-skeleton-impl
      [width]="width"
      [height]="height"
      [borderRadius]="borderRadius"
      [primaryColor]="primaryColor"
      [secondaryColor]="secondaryColor"
    ></ng-loading-skeleton-impl>
  `
})
export class NgLoadingSkeletonWrapperComponent {
  @Input() width = '100%';
  @Input() height = '20px';
  @Input() borderRadius = '4px';
  @Input() primaryColor = '#e0e0e0';
  @Input() secondaryColor = '#f8f8f8';
}
