import { Component, OnInit, Input } from '@angular/core';

declare const genRandomNumbers: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() p_title: string;

  rNum = <[]>genRandomNumbers();
  page: Number = 1;
  itemsToDisplay: Number = 10;

  pageChange(event){
    this.page = event;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  


}
