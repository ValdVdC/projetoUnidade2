import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, last, lastValueFrom, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  pagina: number = 0;
  corString: string = ''
  dimensaoString:string = ''

  private corS = new BehaviorSubject('c1')
  private dimensaoS = new BehaviorSubject('d1')

  private pokemons= new BehaviorSubject<any[]>([]);
  private pokemonInfo = new BehaviorSubject<any[]>([]);
  private pokeBuscado = new BehaviorSubject<string>('');

  getPokemons = this.pokemons.asObservable();
  getPokemonInfo = this.pokemonInfo.asObservable();
  getCorS = this.corS.asObservable();
  getDimensaoS = this.dimensaoS.asObservable();
  setPokeBuscado(pokeB:string){
    this.pokeBuscado.next(pokeB)
  }
  setCorS(cor:string){
    this.corS.next(cor)
  }
  setDimensaoS(dimensao:string){
    this.dimensaoS.next(dimensao)
  }
  constructor(private http: HttpClient) {}

  
  async carregar(): Promise<void> {
    let novosPokemons = []; //Aqui é limpado para exibir sempre os primeiros 9 corretamente
    for (let i = 1 + (9 * this.pagina); i <= 9 + (9 * this.pagina); i++) {
      const data: any = await lastValueFrom(this.http.get(`https://pokeapi.co/api/v2/pokemon/${i}`)); //Este For recebe 9 pokemons em ordem da api de acordo com a página
      novosPokemons.push({ // Atribui as informações dendo de novosPokemons
        nome: data.name,
        sprite: data.sprites.other[this.dimensaoString][this.corString]
      });
    }
    this.pokemons.next(novosPokemons);//objeto pokemons "Global" recebe de objeto pokemons "Local"
  }
  async proximo(): Promise<void> { //Adiciona uma página e chama a função carregar, mudando os pokemons chamados
    this.pagina++;
    await this.carregar();
  }
  
  async voltar(): Promise<void> { //subtrai uma página e chama a função carregar, mudando os pokemons chamados
    if (this.pagina > 0) {
      this.pagina--;
    }
    await this.carregar();
  }
  
  async buscar(){
    const data:any = await lastValueFrom(this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.pokeBuscado.value}`));
    console.log(data)
    let sTipo:any 
      if(data.types.length==2){
        sTipo = `${data.types['0'].type.name} / ${data.types['1'].type.name}`
      }
      else{
        sTipo=data.types['0'].type.name
      }
      const novoPokemon=[{
      nome: data.name,
      id:data.id,
      sprite: data.sprites.other[this.dimensaoString][this.corString],
      tipo: sTipo
    }]
   
    this.pokemonInfo.next(novoPokemon)
    // console.log(novoPokemon)
    // console.log(this.pokemonInfo)
  }
  async cor(){
    let cor: string = this.corS.value
    if(cor=='c1'){
      this.corString = `front_default`
    }else{
      this.corString = `front_shiny`
    }
  }
  async dimensao(){
    let dimensao:string = this.dimensaoS.value
    if(dimensao=='d1'){
      this.dimensaoString = 'official-artwork'
    }else{
      this.dimensaoString = 'showdown'

    }
  }
}
