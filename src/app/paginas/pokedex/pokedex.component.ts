import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../servicos/api/api.service';
import { finalize, Subscription } from 'rxjs';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent implements OnInit, OnDestroy{
  
  pokemons: any = [];
  pokeBuscado:string =''
  cor:string = ''
  dimensao:string = ''
  pokemonInfo:any=[]
  telaPokedex:boolean = true
  telaInfo:boolean = false
  carregando:boolean = false
  private subscription: Subscription|null =null;
  
  c1:boolean = false
  c2:boolean = false
  d1:boolean = false
  d2:boolean = false

  constructor(private apiService: ApiService) {
    this.apiService.getCorS.subscribe(cor=>this.cor=cor)
    this.apiService.getDimensaoS.subscribe(dms=>this.dimensao=dms)
  }
  async ngOnInit(){
    this.corR()
    this.dimR()
    this.apiService.cor();
    this.apiService.dimensao();
    this.apiService.carregar();
     this.apiService.getPokemons.subscribe(pokeInfo => { //Observa o objeto pokemons do api.service
     this.pokemons = pokeInfo; // atribui o conteúdo de pokemons do api.service à pokemons do pokedex.component
     });
    this.telaPokedex=true
    this.telaInfo=false
    this.pokemons = []
    
  }
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
   async buscar(obj:any){
    this.pokemonInfo = []
    this.carregando=true
    this.telaPokedex=false
    this.telaInfo=true
    if(obj.target.className=='imagemCelula'){
      this.apiService.setPokeBuscado(obj.target.nextElementSibling.innerHTML)
    }
    else{
      this.apiService.setPokeBuscado(this.pokeBuscado)
    }
      await this.apiService.buscar()
      if(this.subscription){
        this.subscription.unsubscribe();
      }
      this.subscription = this.apiService.getPokemonInfo.subscribe(pokeInfo=>{
      this.pokemonInfo = pokeInfo
      this.carregando=false
      console.log(this.pokemonInfo)

    })
  }
  
  escreve(valor:string){
    this.pokeBuscado = (((valor).toLowerCase()).trim()).toString()
  }
  anterior(){
    this.apiService.voltar();
  }

  proximo(){
    this.apiService.proximo();
  }
  corS(event:any){
   this.ngOnInit()
   this.apiService.setCorS(event.target.id)
   this.apiService.cor()
  }
  dimensaoS(event:any){
   this.apiService.setDimensaoS(event.target.id)
   this.ngOnInit()
   this.apiService.dimensao()
  }
  corR(){
    if(this.cor=='c1'){
      this.c1= true
      this.c2 = false
     }else{
      this.c1 = false
      this.c2 = true
     }
  }
  dimR(){
    if(this.dimensao=='d1'){
      this.d1= true
      this.d2 = false
     }else{
      this.d1 = false
      this.d2 = true
     }
  }

}



/* 

Exemplo de como usar get para váriavel string
    this.apiService.getNomePoke.subscribe(pokeInfo=>{
    this.nomePoke = pokeInfo
    })


    */
