import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MainService {
	cartdata: any = [];
	base_url: string;
	product_id: number;
  constructor(private http: HttpClient) {
  	//alert(this.cartdata);
		this.base_url = 'http://snfladies.com/ecomm/api/';
		// this.base_url = environment.base_url+"api/";
			if ( localStorage.getItem('cart') !== '' ) {
	  		this.cartdata = JSON.parse( localStorage.getItem('cart') );
  		}
  }
  getProducts() {
		return this.http.get<any>(this.base_url + 'products/index', {})
  		      .pipe(map(data => {
  		        if (data) {
  		        }
  		        return data;
  		      }));
  }
  productDetails() {
		return this.http.get<any>(this.base_url + 'products/productDetails/' + this.product_id, {})
	    .pipe(map(data => {
	      if (data) {
	      	return data;
	      }
	   }));
  }
  order(formdata) {
  	return this.http.post<any>(this.base_url + 'products/order', {'formdata': formdata, 'cartdata': this.cartdata})
	    .pipe(map(data => {
	      if (data) {
	      	return data;
	      }
	   }));
  }
  checkItemInCart(prdid) {
  	if (this.cartdata != null && this.cartdata.length > 0) {
	  	for (let i = 0; i < this.cartdata.length; i++) {
	  		if (this.cartdata[i].id === prdid) { return 1; }
	  	}
	  } else {
	  	return 0;
	  }
  }
}
