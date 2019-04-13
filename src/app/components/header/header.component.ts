import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MainService } from '../../service/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	items_in_cart: number;

  constructor(public mainservice: MainService) {
  	if(this.mainservice.cartdata != null){ this.items_in_cart=this.mainservice.cartdata.length; }
  }
  ngOnInit() {
  }
}
