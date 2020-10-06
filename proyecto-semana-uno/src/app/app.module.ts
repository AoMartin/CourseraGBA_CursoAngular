import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComidaComponent } from './comida/comida.component';
import { ListaComidasComponent } from './lista-comidas/lista-comidas.component';

@NgModule({
  declarations: [
    AppComponent,
    ComidaComponent,
    ListaComidasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
