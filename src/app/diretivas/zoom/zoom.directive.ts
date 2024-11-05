import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {
  constructor() {}
  @HostBinding('style.transform') escala = 'scale(1)';
  @HostBinding('style.transition') transicao = 'transform 0.3s ease';

  @HostListener('mouseenter') onMouseEnter() {
    this.escala = 'scale(1.05)';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.escala = 'scale(1)';
  }
}
