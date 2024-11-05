import { Directive, HostBinding, HostListener } from '@angular/core';
import { PopupService } from '../../servicos/popup/popup.service';

@Directive({
  selector: '[appBgColorAdvinhacao]'
})
export class BgColorAdvinhacaoDirective {
  constructor(private popupService:PopupService){
    this.popupService.getTema.subscribe(tema=>this.mudaTema(tema))
  }
  
  @HostBinding('style.background') back = ''
    mudaTema(tema:string){
    if(tema=='r1'){
      this.back = `radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(70,225,252,1) 100%)`
      console.log(tema)
    }else if(tema=='r2'){
      this.back = `radial-gradient(circle, rgb(24, 124, 29) 0%, rgb(25, 231, 187) 100%)`
      console.log(tema)
    }else if (tema === 'r3') {
      this.back = 'radial-gradient(circle, rgb(123, 63, 251) 0%, rgb(179, 70, 252) 100%)'
      console.log(tema)
    }
  }
  
}
