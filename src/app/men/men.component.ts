import { Component, OnInit } from '@angular/core';
import * as shirts from "../data/mprod.json";
import { Mproducts } from '../mproducts';
import { MproductsService } from '../mproducts.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  constructor(private mproduct:MproductsService) { }
  cloth: Mproducts[]=[];

  ngOnInit(): void {
    const clothObservable= this.mproduct.getDetails();
    clothObservable.subscribe((clothData: Mproducts[])=>{
      this.cloth=clothData;
    });
  }
  // mprod:any=(shirts as any).default;
  productDetail=false;

  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }

  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa fa-plus';
    }
    else{
      content='fa fa-minus';
    }
    return content;
  }


}
