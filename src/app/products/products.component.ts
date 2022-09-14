import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//   prodEntered: string='';

// searchProduct(product_Name:string):void{
//   if(!product_Name){
//     this.prodEntered='';
//   }
//   this.prodEntered=product_Name;
// }

productentered: string=' '


searchProduct(product_name:string):void{
  if(!product_name)
  {
    this.productentered=' ';
  }
  this.productentered=product_name;
  console.log(product_name)
}


products:any[]=[
  {
    prodname:"Shoes"
  },
  {
    prodname:"dress"
  },
  {
    prodname:"perfumes"
  },
  {
    prodname:"bags"
  },]
}
