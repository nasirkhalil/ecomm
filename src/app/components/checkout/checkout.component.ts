import { Component, OnInit } from '@angular/core';
import { MainService } from '../../service/main.service';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  orderstatus = true;
  totalAmount = 0;
  frm_loading = false;
  dateTime: any;
  message: any;
  constructor(public mainservice: MainService) {

  }

  ngOnInit() {
  }
  ngAfterContentChecked()  {
    if (this.mainservice.cartdata != null && this.mainservice.cartdata.length > 0) {
      const sum = this.mainservice.cartdata.reduce(function(sum, elem) {
           return (parseInt(sum) + ( parseInt(elem.product_price) * parseInt(elem.cartquantity)));
         }, 0);
      this.totalAmount = sum;
    }
  }
 submitFrm(data) {
  this.frm_loading = true;
  // this.frm_loading = false;
  //console.log(data);
  this.mainservice.order(data).subscribe((data:  any) => {
    // alert(data);
    this.orderstatus = false;
    this.frm_loading = false;
    this.mainservice.cartdata = [];
    this.message = data.msg;
    localStorage.removeItem('cart');
  });
 }
 showField() {
 }

}
