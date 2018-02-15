# NgxTimeAgoKor
[![NPM version](https://img.shields.io/npm/v/markdown-it.svg?style=flat)](https://www.npmjs.org/package/time-ago-kor)
[![Libraries.io for releases](https://img.shields.io/librariesio/release/hex/phoenix/1.0.3.svg)](https://github.com/lyasee/ngx-time-ago-kor)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://github.com/lyasee/ngx-time-ago-kor)

**Angular time pipe kor version!**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

# Installation
npm install --save time-ago-kor

# How to use

example

app.module.ts
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TimeAgoKorModule } from "time-ago-kor";
    
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
```

.ts
```typescript
export class AppComponent {  
	datetime = '2018-01-08 11:12:14';  
}  
```

.html
```html
<div>{{datetime | timeAgoKor}}</div>  
```

