import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GiftsModule } from './gifs/gifts.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GiftsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
