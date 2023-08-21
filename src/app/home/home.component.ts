import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { ProfileService } from "../profile.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isLoggedIn: boolean = false;
  constructor(private profile: ProfileService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.profile.loggedInStatus();
  }

  parent_title = 'Skills';

  product: string;

  addProductParent(value: string) {
    this.product = value;
  }

  quantity: number = 0;
  //access child property component from parent via @ViewChild
  @ViewChild(ProductsComponent) childProduct: ProductsComponent;
  ngAfterViewInit() {

    this.childProduct.childMethod();
    this.quantity = this.childProduct.inStockChild;

    console.log(this.quantity);

  }





}
