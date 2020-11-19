import { Component, Input, OnChanges, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'; //errado import { EventEmitter } from 'events';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
  //nao estamos recebendo o valor correto para as estrelas
  //rating: number = 4;
  //necessario adicionar @Input e declarar o binding no product-list
  @Input() rating: number; //iremos receber valor do outro container
  starWidth: number;

  //se quisermos mandar algo para container necessario usar @Output de evento
  //somente funciona com evento
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();


  onClick(): void {
    //console.log(`The rating star is ${this.rating}`);
    this.ratingClicked.emit(`The rating star is ${this.rating}`);
  }
  ngOnChanges(): void {
    this.starWidth = this.rating * 75/5
  }
}
