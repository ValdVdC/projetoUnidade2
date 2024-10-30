import { Component, OnInit } from '@angular/core';
import { PopupService } from '../../servicos/popup/popup.service';

@Component({
  selector: 'app-dificuldade',
  templateUrl: './dificuldade.component.html',
  styleUrl: './dificuldade.component.css'
})
export class DificuldadeComponent implements OnInit {
  dificuldade:string = ''
  radioA:boolean=false
  radioB:boolean=false
  radioC:boolean=false
  constructor(private popupService:PopupService){
    this.popupService.getDificuldade.subscribe(dfc=>this.dificuldade=dfc)
  }
  ngOnInit(){
    if (this.dificuldade=='r1') {
      this.radioA =true
    }
    else if (this.dificuldade=='r2') {
      this.radioB =true
    }
    else if (this.dificuldade=='r3') {
      this.radioC =true
    } 
  }

  radioS(event:any){
    // if(event.target.id=='r1'){
    // this.popupService.setDificuldade('r1')
    // console.log('r1')

    // }else if(event.target.id=='r2'){
    // this.popupService.setDificuldade('r2') 
    // console.log('r2')
    // }
    // else if(event.target.id=='r3'){
    //   console.log('r3')
    //   this.popupService.setDificuldade('r3')
    // }
    this.popupService.setDificuldade(event.target.id)
  }
  fechar(){
    this.popupService.fechar()
  }
}
