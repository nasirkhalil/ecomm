import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
// import {Subject} from 'rxjs/Subject';
// import { Subject } from 'rxjs/Rx';

@Injectable()
export class DataService {

    getData() {
    }

    updateData() {
      // this.dataObs$.next(data);
      alert("in data service");
    }
}
