import { Component } from '@angular/core';

@Component({
   selector: 'app-root' ,
   template: `
     <nav-bar></nav-bar>
     <div> 
        Welcome To MukeApss
     </div>
   `
})

export class AppComponent {
  pageTitle: string = 'MukeApps';
}
