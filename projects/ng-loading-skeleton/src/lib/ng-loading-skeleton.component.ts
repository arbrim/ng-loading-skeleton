import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-loading-skeleton',
  template: `
    <div [ngStyle]="{ width: width, height: height, borderRadius: borderRadius }" class="skeleton"></div>
  `,
  styles: [`
    .skeleton {
      background: linear-gradient(90deg, #e0e0e0 25%, #f8f8f8 50%, #e0e0e0 75%);
      background-size: 400% 100%;
      animation: shimmer 1.5s infinite;
    }
    @keyframes shimmer {
      0% { background-position: 100% 0; }
      100% { background-position: -100% 0; }
    }
  `]
})
export class NgLoadingSkeletonComponent {
  @Input() width = '100%';
  @Input() height = '20px';
  @Input() borderRadius = '4px';
}
