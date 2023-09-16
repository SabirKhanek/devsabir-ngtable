import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgTableModule } from 'NgTable';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
