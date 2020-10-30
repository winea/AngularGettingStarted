// Modulo responsavel pelas rotas, importal todos componentes para ficar visivel
//para todos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//para poder usar [(ngModel)]
import { FormsModule } from '@angular/forms';
//para http Service
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from 'src/app/product/product-list.component';
import { ConvertToSpacesPipe } from 'src/app/shared/convert-to-spaces.pipe';
import { StarComponent } from 'src/app/shared/star.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { WelcomeComponent } from 'curso/03/demos/APM/src/app/home/welcome.component';
import { ProductListComponentHttp } from './product/httpObservable/product.componentHttp';
import { ProductDetailGuard } from 'curso/12/demos/APM/src/app/products/product-detail.guard';
import { ProductModule } from './product/product.module';



@NgModule({
  declarations: [
    AppComponent,
    // ProductListComponent,
    // ConvertToSpacesPipe,
    // StarComponent,
    // ProductDetailComponent,
    ProductListComponentHttp,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      // { path: 'products', component: ProductListComponent },
      // { path: 'productshttp', component: ProductListComponentHttp },
      // { path: 'products/:id',
      // //proteger rota com guard
      //   canActivate: [ProductDetailGuard],
      //   component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
