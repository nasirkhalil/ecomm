import { Component, OnInit } from '@angular/core';
import { MainService } from '../../service/main.service';
import { environment } from '../../../environments/environment';
import { FilterPipe} from '../../filter.pipe';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cartdata: any = [];
	products:  any = [];
  searchText: '';
	image_url: string = environment.base_url;
  constructor(private mainservice: MainService) {
  		mainservice.getProducts().subscribe(data => {
        this.products  =  data;
       	// console.log(this.products);Array<object>
    	});
  }
productDetails(pid) {
	// alert(pid);
	this.mainservice.product_id = pid;
}
ngOnInit() {
}

}
