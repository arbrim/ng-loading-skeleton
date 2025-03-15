import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-loading-skeleton',
  template: `
    <div 
      [ngStyle]="{
        width: width, 
        height: height, 
        borderRadius: borderRadius, 
        background: 'linear-gradient(90deg, ' + primaryColor + ' 25%, ' + secondaryColor + ' 50%, ' + primaryColor + ' 75%)',
        backgroundSize: '400% 100%'
      }" 
      class="skeleton"
    ></div>
  `,
  styles: [`
    .skeleton {
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
  @Input() primaryColor = '#e0e0e0';
  @Input() secondaryColor = '#f8f8f8';
}
