import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GiftsModule } from './gifs/gifts.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GiftsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
