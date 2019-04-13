import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../service/data.service';
import { MainService } from '../../service/main.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  image_url:string = environment.base_url;
	items: any= [1,1];
  totalAmount:number=0;
  // private cartitems: any = [];
  // private total: number = 0;
  constructor(public mainservice: MainService, private router: Router) {
  }
  ngOnInit() {
  }
  ngAfterContentChecked()  {
    if (this.mainservice.cartdata != null && this.mainservice.cartdata.length > 0){
      var sum = this.mainservice.cartdata.reduce(function(sum, elem){ 
                  return (parseInt(sum) + ( parseInt(elem.product_price)*parseInt(elem.cartquantity)));
         },0);
      this.totalAmount = sum;
    }
}
incrementItem(index){
	// this.items[]=50;
	// this.items[index]++;
	// alert(this.items[0]);
   this.mainservice.cartdata[index].cartquantity++;
   localStorage.setItem('cart',JSON.stringify(this.mainservice.cartdata));
}
decrementItem(index){
	// this.items[]=60;
	if(this.mainservice.cartdata[index].cartquantity == 1) return;
  this.mainservice.cartdata[index].cartquantity--;
  localStorage.setItem('cart',JSON.stringify(this.mainservice.cartdata));
}
  removeFromCart(pid){
    for(var i=0; i<this.mainservice.cartdata.length; i++){
     if(this.mainservice.cartdata[i].id==pid){
        this.mainservice.cartdata.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('cart',JSON.stringify(this.mainservice.cartdata));
    this.mainservice.cartdata = JSON.parse( localStorage.getItem('cart') );
    if(this.mainservice.cartdata.length < 1){
      this.router.navigate(['/shop']);
    }
     // this.router.navigate(['/externalRedirect', { externalUrl: url }], {
     //        skipLocationChange: true,
     //    });
  }
}
