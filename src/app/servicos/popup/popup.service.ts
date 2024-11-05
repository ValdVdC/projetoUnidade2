import { Injectable } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { DificuldadeComponent } from '../../modals/dificuldade/dificuldade.component';
import { BehaviorSubject } from 'rxjs';
import { GeracoesComponent } from '../../modals/geracoes/geracoes.component';
import { TemaAdvComponent } from '../../modals/tema-adv/tema-adv.component';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  
  private dificuldade = new BehaviorSubject('r2')
  private tema = new BehaviorSubject('r1')
  private geracao = new BehaviorSubject<any>(['c1']);
  getDificuldade = this.dificuldade.asObservable();
  getGeracao = this.geracao.asObservable();
  getTema = this.tema.asObservable();

  constructor(private dialog: MatDialog) { }
  
  setDificuldade(dificuldade:string){
    this.dificuldade.next(dificuldade)
  }
  setGeracao(geracao:any){
    this.geracao.next(this.geracao.getValue().concat([geracao]))
  }
  setTema(tema:any){
    this.tema.next(tema)
  }
  removeGeracao(geracao:any){
    const geracoes = this.geracao.getValue();
    const attGeracoes = geracoes.filter((item:any)=>item!==geracao)
    this.geracao.next(attGeracoes)
  }
  existeEmGeracao(item:any){
    return this.geracao.getValue().includes(item);
  }
  abrirD(){
    if(this.dialog.openDialogs.length==0){
    this.dialog.open(DificuldadeComponent, {
      height:'380px',
      width:'240px',
      panelClass:'dialogo',
      disableClose:true,
    })
    
    }
    else if(this.dialog.openDialogs.length==1){
      this.fechar()
    }
  }
  abrirG(){
    if(this.dialog.openDialogs.length==0){
      this.dialog.open(GeracoesComponent, {
        height:'380px',
        width:'240px',
        panelClass:'dialogo',
        disableClose:true,
      })
      
      }
      else if(this.dialog.openDialogs.length==1){
        this.fechar()
      }
  }
  abrirT(){
    if(this.dialog.openDialogs.length==0){
      this.dialog.open(TemaAdvComponent, {
        height:'380px',
        width:'240px',
        panelClass:'dialogo',
        disableClose:true,
      })
      
      }
      else if(this.dialog.openDialogs.length==1){
        this.fechar()
      }
  }
  fechar(){
    this.dialog.closeAll()
  }
}
