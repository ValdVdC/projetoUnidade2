import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { AdvinhacaoComponent } from './paginas/advinhacao/advinhacao.component';
import { PokedexComponent } from './paginas/pokedex/pokedex.component';

const routes: Routes = [
  {
    path: '',component:HomeComponent
  },
  {
    path: 'advinhacao',component:AdvinhacaoComponent
  },
  {
    path: 'pokedex',component:PokedexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
