import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface JSP {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}

declare const genRandomNumbers: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  inStockChild: number = 10;

  childMethod() {
    console.log("A method in the product component -  the child!");
  }

  @Output() child_new_product_Event = new EventEmitter<string>();

  @Input() child_title_from_parent: string;

  rNum = <[]>genRandomNumbers();
  page: Number = 1;
  itemsToDisplay: Number = 10;

  pageChange(event) {
    this.page = event;
  }

  addProductChild(value: string) {
    this.child_new_product_Event.emit(value);
  }

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  todos: JSP[];

  ngOnInit(): void {

    // this.http.get<JSP[]>("https://jsonplaceholder.typicode.com/todos")
    //   .subscribe(data => {
    //     console.log(data);
    //     this.todos = data;
    //   });

    this.route.params.subscribe(params => console.log(params));

  }




}
