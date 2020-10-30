//Component deve possuir import do decorator, Metadata -> @decorator,
//dentro template (Html)
//e Classe para exportar
import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  // templateUrl: './app.component.html',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
        <li><a class='nav-link' [routerLink]="['/products']">Product List</a></li>
        <li><a class='nav-link' [routerLink]="['/productshttp']">Product List Http</a></li>
      </ul>
      <div class='container'>
        <router-outlet></router-outlet>
      </div>
    </nav>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
}
