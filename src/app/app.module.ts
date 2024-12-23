import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PokedexComponent } from './paginas/pokedex/pokedex.component';
import { AdvinhacaoComponent } from './paginas/advinhacao/advinhacao.component';
import { provideHttpClient } from '@angular/common/http';
import { DificuldadeComponent } from './modals/dificuldade/dificuldade.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GeracoesComponent } from './modals/geracoes/geracoes.component';
import { PartePipe } from './pipes/parte.pipe';
import { BgColorAdvinhacaoDirective } from './diretivas/bgColor/bg-color-advinhacao.directive';
import { TemaAdvComponent } from './modals/tema-adv/tema-adv.component';
import { ZoomDirective } from './diretivas/zoom/zoom.directive';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PokedexComponent,
    AdvinhacaoComponent,
    DificuldadeComponent,
    GeracoesComponent,
    PartePipe,
    BgColorAdvinhacaoDirective,
    TemaAdvComponent,
    ZoomDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
