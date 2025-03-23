import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-loading-skeleton', // ✅ unified selector
  standalone: true,
  imports: [CommonModule],
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
  @Input() width: string = '100%';
  @Input() height: string = '20px';
  @Input() borderRadius: string = '4px';
  @Input() primaryColor: string = '#e0e0e0';
  @Input() secondaryColor: string = '#f8f8f8';
}
