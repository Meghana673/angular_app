import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mproducts } from './mproducts';
@Injectable({
  providedIn: 'root'
})
export class MproductsService {

  constructor() { }
  cloth: Mproducts[] =
  [
    {
      "pid":1,
      "pname":"BESIMPLE",
      "pdescription":"Camel Borg Zip Funnel Neck Sweatshirt",
      "price":1500,
      "img":" assets/ms1.jpg"
    },
    {
      "pid":2,
      "pname":"FORT COLLINS",
      "pdescription":"Quilted Zip-Front Jacket with Detachable Hood",
      "price":1421,
      "img":"assets/ms2.jpg "

    },
    {
      "pid":3,
      "pname":"PUMA",
      "pdescription":"Hooded Sweatshirt with Kangaroo Pockets",
      "price":1739,
      "img":"assets/ms3.jpg "

    },
    {
      "pid":4,
      "pname":"CAMPUS SUTRA",
      "pdescription":"Colourblock Hooded Sweatshirt",
      "price":950,
      "img":"assets/ms4.jpg "

    },
    {
      "pid":5,
      "pname":"GRIMELANGE",
      "pdescription":"Graphic Print Oversized Hoodie",
      "price":1427,
      "img":"assets/ms5.jpg "
    }
  ]
  public getDetails(): any {
    const clothObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.cloth);
      }, 1000);
    });
    return clothObservable;
  }

}
