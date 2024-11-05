import { Component, OnInit } from '@angular/core';
import { PopupService } from '../../servicos/popup/popup.service';

@Component({
  selector: 'app-tema-adv',
  templateUrl: './tema-adv.component.html',
  styleUrl: './tema-adv.component.css'
})

export class TemaAdvComponent implements OnInit{
  constructor(private popupService:PopupService){
    this.popupService.getTema.subscribe(tema=>this.tema=tema)
  }
  tema:string = ''
  radioA:boolean=false
  radioB:boolean=false
  radioC:boolean=false
  ngOnInit(){
    if (this.tema=='r1') {
      this.radioA =true
    }
    else if (this.tema=='r2') {
      this.radioB =true
    }
    else if (this.tema=='r3') {
      this.radioC =true
    } 
    console.log(this.tema)
  }
  radioS(event:any){
    this.popupService.setTema(event.target.id)
  }
  fechar(){
    this.popupService.fechar()
  }
}
