/como ja tenho package pronto basta
#npm install

/"scripts": {
/    "ng": "ng",
/    //serve inicia a aplicação localhoost e -o abre no default browser
/    "start": "ng serve -o",
/    "build": "ng build",
/    "test": "ng test",
/    "lint": "ng lint",
/    "e2e": "ng e2e"
/  },

#npm start

#npm install bootstrap@4.1.1 font-awesome@4.7.0

/no styles.css inserir o import do bootstrap e font-awesome


/no HTML pode ser usado *ngIf, se for falso o elemento some se for verdadeiro aparece tanto ele como seus filhos
/<table class='table' *ngIf = 'products && products.lenght'>
/só ira mostrar a tabela se houver algum elemento na tabela

/for...of = for(let i=0;...)
/let names = ['ana', 'jeff',...]
/for (let n of names) {
/  console.log(n); // result ana, jeff...
/}

/for...in propriedades objeto
/let names = ['ana', 'jeff',...]
/for (let n in names) {
/  console.log(n); // result 0, 1... (id)
/}

/data binding
/[src]="product.imageUrl

/two-way data binding
/<input [(ngModel)] = 'list'>

/no app.module
/@NgModule({
  /Usado para declarar componentes para ficar visivel aos demais
 / declarations: [
   / AppComponent,
 /   ProductListComponent
 / ],
  /Usado para declarar bibliotecas do angular ou terceiros usadas
  /imports: [
   / BrowserModule,
  /  FormsModule
  /],
 / bootstrap: [AppComponent]
/})

/Pipe permite transformar dados antes de mostrar
/{{ product.productName | lowercase }}

/custom pipe na pasta shared


/BUSCA
/GETTER (somente leitura), nao recebe parametro
/get fullname(): string {
 / return this.lastName + ', ' + this.firstName;
/}

/console.log(this.fullname);//nao tem parenteses qdo chama

/SETTER somente escrita, necessita ter 1 parametro
/set quantity(value: number) {
 / this.recalculate(quantity);
/}

/this.quantity = 10;

/NESTED COMPONENT (inserir component em outro), mostrar estrelas nota pasta shared

/SERVICE classe com proposito especifico, independente de componentes
distribui dados ou logica atraves dos componentes
Usa atraves de Dependency Injection (classe recebe instancias de objetos
que precisa, chamamos de dependencias, de uma fonte externa, ao inves de criar estas)

/Root injector ficara viavel para toda a aplicação
/@Injectable({
/  provideIn: 'root'
/})
/Component injector disponivel apenas para o componente e nested component(componente filho)

/Exemplo no product-list.component.ts
/@Component({
 / templateUrl: '...',
 / providers: [ProductService] //serviço disponivel para este componente e seu filho (star)
/})

/a Injeção de dependencias e feita no constructor dentro da classe do componente
/constructor(private productService: ProductService) {

 / }


/CLI
#npm install -g @angular/cli

/criar componente automatico
/--flat sem pasta
#ng g c product/product-detail --flat

/As rotas sao configuradas na module

/ criar guard para proteger rotas
#ng g g product/product-detail

/ criar modulos
#ng g m product/product --flat -m app

/shared modulos  (-m fala para importar o novo modulo no product.module)
#ng g m shared/shared --flat -m product/product.module
