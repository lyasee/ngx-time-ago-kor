import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TimeAgoKorModule } from './pipes/time-ago-kor.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TimeAgoKorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
