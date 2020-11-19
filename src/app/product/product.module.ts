//ng g m product/product --flat -m app
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponentHttp } from './httpObservable/product.componentHttp';
import { ProductDetailGuard } from 'src/app/product/product-detail.guard';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    //StarComponent,
    ProductDetailComponent,
    ProductListComponentHttp
  ],
  //passado para shared module
  imports: [
    //CommonModule,
    //FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponentHttp },
      {
        path: 'products',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
