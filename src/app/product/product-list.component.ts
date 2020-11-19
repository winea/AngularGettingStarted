import { Component, OnInit } from '@angular/core';
import { ProductService } from 'curso/09/demos/APM/src/app/products/product.service';
import { IProduct } from 'src/app/product/product';


@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

//OnInit Angular has initialized all data-bound properties, precisa metodo ngOnInit
export class ProductListComponent implements OnInit{
  //interpolation
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  //Output exemplo
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List ' + message;
  }

  //campo que sera usado para busca, precisamos saber qdo este campo e alterado
  //listFilter: string = 'cart';
  //transformar em getter e setter, como tem mesmo nome pode tanto ler qto escrever
  //se nao tiver parametro faz getter se tiver 1 parametro o setter
  _listFilter: string;
  //recebe retorno
  get listFilter(): string {
    return this._listFilter;
  }
  //passa valor alterado pelo usuario
  set listFilter(value: string) {
    this._listFilter = value;
    // se existe listFilter, realiza o filtro no valor senao retorna todos produtos
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  //criar filtro para produtos, resultado busca
  filteredProducts: IProduct[];

  // products: IProduct[] = [
  //   {
  //     "productId": 2,
  //     "productName": "Garden Cart",
  //     "productCode": "GDN-0023",
  //     "releaseDate": "March 18, 2019",
  //     "description": "15 gallon capacity rolling garden cart",
  //     "price": 32.99,
  //     "starRating": 4.2,
  //     "imageUrl": "assets/images/garden_cart.png"
  //   },
  //   {
  //     "productId": 5,
  //     "productName": "Hammer",
  //     "productCode": "TBX-0048",
  //     "releaseDate": "May 21, 2019",
  //     "description": "Curved claw steel hammer",
  //     "price": 8.9,
  //     "starRating": 4.8,
  //     "imageUrl": "assets/images/hammer.png"
  //   }
  // ];

  //ira receber do Services os dados
  products: IProduct[] = [];

  //construtor é executado na inicialização, default values
  //no construtor fazer a injeção de dependencia para poder usar Service
  //um bom local para chamar o sevices sera no ngOnInit() abaixo
  constructor(private productService: ProductService) {
    //this.filteredProducts = this.products; //removido daqui senao inicializa vazio
    //this.listFilter = 'cart';
  }

  //filtro, busca
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase(); //string inserida pelo usuario
    //retornar novo array com produtos que atendem a busca
    return this.products.filter((product: IProduct) => {
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    })
  }

  // metodo representa funçao
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    //console.log('On Init works');
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products; //inicializa com dados
  }
}
