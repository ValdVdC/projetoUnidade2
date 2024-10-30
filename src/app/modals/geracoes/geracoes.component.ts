import { Component, OnInit } from '@angular/core';
import { PopupService } from '../../servicos/popup/popup.service';

@Component({
  selector: 'app-geracoes',
  templateUrl: './geracoes.component.html',
  styleUrl: './geracoes.component.css'
})
export class GeracoesComponent implements OnInit{
  geracao:any = []
  checkA:boolean=false
  checkB:boolean=false
  checkC:boolean=false
  checkD:boolean=false
  checkE:boolean=false
  checkF:boolean=false
  checkG:boolean=false
  checkH:boolean=false
  checkI:boolean=false
  constructor(private popupService:PopupService){
    this.popupService.getGeracao.subscribe(grc=>this.geracao=grc)
  }
  ngOnInit(){
    for (let i = 0; i < this.geracao.length; i++) {
      
    if (this.geracao[i]=='c1') {
      this.checkA =true
    }
    else if (this.geracao[i]=='c2') {
      this.checkB =true
    }
    else if (this.geracao[i]=='c3') {
      this.checkC =true
    } 
    else if (this.geracao[i]=='c4') {
      this.checkD =true
    }
    else if (this.geracao[i]=='c5') {
      this.checkE =true
    }
    else if (this.geracao[i]=='c6') {
      this.checkF =true
    } 
    else if (this.geracao[i]=='c7') {
      this.checkG =true
    }
    else if (this.geracao[i]=='c8') {
      this.checkH =true
    }
    else if (this.geracao[i]=='c9') {
      this.checkI =true
    } 
  }
  }
  fechar(){
    this.popupService.fechar()
  }
  radioS(event:any){
    if(event.target.checked==true){
      this.popupService.setGeracao(event.target.id)
    }else if(event.target.checked==false){
      this.popupService.removeGeracao(event.target.id)
    }
  }

}
