import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';
import { IProduct } from 'src/app/product/product';
import { ProductServiceHttp } from './product.serviceHttp';


@Component({
  selector: 'pm-productshttp',
  templateUrl: './product-list.componentHttp.html',
  styleUrls: ['./product-list.componentHttp.css']
})

//OnInit Angular has initialized all data-bound properties, precisa metodo ngOnInit
export class ProductListComponentHttp implements OnInit{
  //interpolation
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string;

  //Output exemplo
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List ' + message;
  }

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


  //ira receber do Services os dados
  products: IProduct[] = [];

  //no construtor fazer a injeção de dependencia para poder usar Service
  //um bom local para chamar o sevices sera no ngOnInit() abaixo
  constructor(private productService: ProductServiceHttp) {

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
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products; //inicializa com dados
      },
      error: err => this.errorMessage = err
    });

  }
}
