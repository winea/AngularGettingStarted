import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/product/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute,
              private router: Router) { }


  ngOnInit(): void {
    //usar snapshot pq o id nao ira mudar, se fosse para botao next
    //necessario usar observables
    //o sinal de + é para transformar a string em number
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      'productId': id,
      'productName': '',
      'productCode': '',
      'releaseDate': '',
      'description': '',
      'price': 19,
      'starRating': 3.5,
      'imageUrl': 'assets/images/leaf_rake.png'
    }
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
