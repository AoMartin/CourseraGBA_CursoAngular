import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaMensajesComponent } from './lista-mensajes/lista-mensajes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaMensajesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
