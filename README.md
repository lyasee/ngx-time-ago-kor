# NgxTimeAgoKor
**time pipe kor version!**
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

# Installation
npm install --save time-ago-kor

# How to use

example

app.module.ts

    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { TimeAgoKorModule } from 'time-ago-kor';
    
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
    

.ts

	export class AppComponent {  
      datetime = '2018-01-08 11:12:14';  
    }  


.html

	<div>{{datetime | timeAgoKor}}</div>  


