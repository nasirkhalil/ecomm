import { Component, OnInit } from '@angular/core';
import { MainService } from '../../service/main.service';
import { environment } from '../../../environments/environment';
// declare var JQuery;
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products: any = [];
  image_url:string = environment.base_url;
	items:number=1;
  isDataAvailable:boolean = false;
  constructor(private mainservice: MainService) { }

  ngOnInit() {
    this.productDetails();
    // localStorage.removeItem('cart');
    // localStorage.clear();
  }
  productDetails(){
    this.mainservice.productDetails().subscribe((data:  any) => {
      this.products  =  data;
      this.isDataAvailable = true;
       // console.log(this.products);
    });
  }
  incrementItem(){
  	this.items++;
  }
  decrementItem(){
  	if(this.items == 1){
  		return;
  	}
  	this.items--;
  }
 addToCart(){
   // alert("test");
  if(this.mainservice.checkItemInCart(this.products.id)) return;
  this.products.cartquantity = this.items;
  if (localStorage.getItem('cart') == null || localStorage.getItem('cart') == "" ) {
    let cart: any = [];
    // alert(this.products);
    cart.push(this.products);
    localStorage.setItem('cart', JSON.stringify(cart));
  }else{
    // localStorage.setItem('cart', '');
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    cart.push(this.products);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  // alert( localStorage.getItem('cart') );
  this.mainservice.cartdata = JSON.parse( localStorage.getItem('cart') );
  // console.log( this.mainservice.cartdata );
   // alert("end of cart");

}
}
