import { Component } from '@angular/core';

@Component({
   selector: 'app-root' ,
   template: `
     <nav-bar></nav-bar>
     <app-landing></app-landing>
   `
})

export class AppComponent {
  pageTitle: string = 'MukeApps';
}
