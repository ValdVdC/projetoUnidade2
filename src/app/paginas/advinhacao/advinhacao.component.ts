import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PopupService } from '../../servicos/popup/popup.service';

@Component({
  selector: 'app-advinhacao',
  templateUrl: './advinhacao.component.html',
  styleUrl: './advinhacao.component.css',
  animations:[
    
  ]
})
export class AdvinhacaoComponent implements OnInit{
  pokemons:any = []
  nomeTentativas:any=[]
  geracao:any=[]
  geracoesEsc:any=[]
  dificuldade:string=''
  nomePoke:string=''
  imgPoke:string=''
  tamanho:string=''
  tentDigitada:string=''
  // tentEscolhida:string=''
  geracaoSorteada: number=0
  brilho:number=0
  tentativas:number=0
   dificuldadeFacil:boolean=false
   dificuldadeNormal:boolean=false
   dificuldadeDificil:boolean=false
  estagioMenu:boolean=true
  estagioJogo:boolean=false
  resultadoGanhou:boolean=false
  resultadoPerdeu:boolean=false
  estagioFim:boolean=false
  constructor(private http:HttpClient, private popupService: PopupService){
    this.popupService.getDificuldade.subscribe(dfc=>this.dificuldade=dfc)
    this.popupService.getGeracao.subscribe(grc=>this.geracao=grc)
  }
  ngOnInit(){
    this.estagioMenu=true
    this.estagioJogo=false
    this.estagioFim=false
    this.resultadoGanhou=false
    this.resultadoPerdeu=false

    for (let i = 1; i <= 3; i++) {
    let numeroAleatorio:number=Math.floor((Math.random()*151)+1)
    // console.log(numeroAleatorio) eco
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`)
    .subscribe({
      next:(data:any)=>{
        // console.log(data) eco
        this.pokemons.push({
          sprite:data.sprites.other['official-artwork'
          ].front_default
        })
      }
    })
  }
  }
  iniciar(){
    this.dificuldadeEscolhida()
    // console.log(this.dificuldade) eco
    // console.log(this.geracao) eco
    // console.log(this.geracoesEsc) eco
    // this.tentativas=3
    this.geracoesEscolhidas()
    this.geracaoSorteada = Math.floor(Math.random()*this.geracao.length)
    // console.log(this.geracao.length) eco
    // console.log(this.geracaoSorteada) eco
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.geracoesEsc[this.geracaoSorteada]}`)
    .subscribe({
      next:(data:any)=>{
        // console.log(data) eco
        this.imgPoke = data.sprites.other['official-artwork'].front_default
        this.nomePoke = data.name
        this.tamanho = '320px'
        this.brilho=0
        this.estagioJogo=true
        this.estagioMenu=false
        this.estagioFim=false
        this.resultadoGanhou=false
        this.resultadoPerdeu=false
        this.geracoesEsc=[]
        this.pokemons=[]
        this.nomeTentativas=[]
        // console.log(this.geracoesEsc) eco
      } 
    })
  }

  //Não funcional por hora

  // enviarF(event:any){
  //   console.log(event)
  //   this.tentEscolhida=event.target.innerHTML
  //   this.resultado()
  // }
  enviarD(){
    this.resultado()
  }
  escreve(value:string){
    this.tentDigitada=(((value).toLowerCase()).trim()).toString()
    // console.log(this.tentDigitada) eco
  }
  abrir(event:any){
    if(event.target.id=='dfc'){
    this.popupService.abrirD();
    }else if(event.target.id=='grc'){
      this.popupService.abrirG();
    }
  }
  fechar(){
    this.popupService.fechar();
  }
   geracoesEscolhidas(){
     if(this.popupService.existeEmGeracao('c1')){
      this.geracoesEsc.push(Math.floor((Math.random()*151)+1))
     }
     if(this.popupService.existeEmGeracao('c2')){
      this.geracoesEsc.push(Math.floor((Math.random()*100)+152))
     }
     if(this.popupService.existeEmGeracao('c3')){
      this.geracoesEsc.push(Math.floor((Math.random()*135)+252))
     }
     if(this.popupService.existeEmGeracao('c4')){
      this.geracoesEsc.push(Math.floor((Math.random()*107)+387))
     }
     if(this.popupService.existeEmGeracao('c5')){
      this.geracoesEsc.push(Math.floor((Math.random()*156)+494))
     }
     if(this.popupService.existeEmGeracao('c6')){
      this.geracoesEsc.push(Math.floor((Math.random()*72)+650))
     }
     if(this.popupService.existeEmGeracao('c7')){
      this.geracoesEsc.push(Math.floor((Math.random()*88)+722))
     }
     if(this.popupService.existeEmGeracao('c8')){
      this.geracoesEsc.push(Math.floor((Math.random()*96)+810))
     }
     if(this.popupService.existeEmGeracao('c9')){
      this.geracoesEsc.push(Math.floor((Math.random()*120)+906))
     }
   }
   dificuldadeEscolhida(){
    if(this.dificuldade=='r1'){
      this.dificuldadeFacil = true
      this.dificuldadeNormal = false
      this.dificuldadeDificil = false
      //temp
      this.tentativas=5
    }
    if(this.dificuldade=='r2'){
      this.dificuldadeFacil = false
      this.dificuldadeNormal = true
      this.dificuldadeDificil = false
      //temp
      this.tentativas=3
    }
    if(this.dificuldade=='r3'){
      this.dificuldadeFacil = false
      this.dificuldadeNormal = false
      this.dificuldadeDificil = true
      //temp
      this.tentativas=1
    }
   }
   //IMPLEMENTAR O DE CIMA COM O DE BAIXO NO FUTURO
   resultado(){
    if(this.dificuldade=='r1'){
      // console.log('eco')
      if(this.tentDigitada==this.nomePoke){
        //Na função ideal tentDigitata será trocada por tentEscolhida
        this.estagioJogo=false
        this.estagioFim=true
        this.resultadoGanhou=true
        // this.nomePokeArray = []
      }else{
        this.tentativas=this.tentativas-1
        this.nomeTentativas.push(this.tentDigitada)
        if (this.tentativas==0) {
          this.estagioJogo=false
          this.estagioFim=true
          this.resultadoPerdeu=true
        }
      }
      this.tentDigitada=''
    }
    else if(this.dificuldade=='r2'){
    if(this.tentDigitada==this.nomePoke){
      this.estagioJogo=false
      this.estagioFim=true
      this.resultadoGanhou=true
      // this.nomePokeArray = []
    }else{
      this.tentativas=this.tentativas-1
      this.nomeTentativas.push(this.tentDigitada)
      if (this.tentativas==0) {
        // this.nomePokeArray = []
        this.estagioJogo=false
        this.estagioFim=true
        this.resultadoPerdeu=true
      }
    }
      this.tentDigitada=''
    }
    else if(this.dificuldade=='r3'){
    if(this.tentDigitada==this.nomePoke){
      this.estagioJogo=false
      this.estagioFim=true
      this.resultadoGanhou=true
      // this.nomePokeArray = []
    }else{
      this.tentativas=this.tentativas-1
      this.nomeTentativas.push(this.tentDigitada)
      if (this.tentativas==0) {
        // this.nomePokeArray = []
        this.estagioJogo=false
        this.estagioFim=true
        this.resultadoPerdeu=true
      }
    }
      this.tentDigitada=''
    }
   }
}
