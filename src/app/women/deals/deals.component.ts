import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  constructor() { }
  @Input()product:any
  ngOnInit(): void {
  }




  productDetail=false;

  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }

  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa-sharp fa-solid fa-angle-up';
    }
    else{
      content='fa-sharp fa-solid fa-angle-down';
    }
    return content;
  }
}
