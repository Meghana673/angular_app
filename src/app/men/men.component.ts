import { Component, OnInit } from '@angular/core';
import * as shirts from "../data/shirts.json";
import * as filters from "../data/filter.json";
import { Mproducts } from '../mproducts';
import { MproductsService } from '../mproducts.service';
import Swal from 'sweetalert2';
import { Cartitem } from '../cartitem';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  constructor(private mproduct:MproductsService,private cartsvc:CartService) { }
  cloth: Mproducts[]=[];

  ngOnInit(): void {
    const clothObservable= this.mproduct.getDetails();
    clothObservable.subscribe((clothData: Mproducts[])=>{
      this.cloth=clothData;
    });
  }
  mprod:any=(shirts as any).default;
  // filter:any=(filters as any).default;

  cart:Cartitem={
    pid:0,
    pname:'',
    pdescription:'',
    price:0,
    img:'',
    quantity:1,
    totalPrice:1
  }
  quantity:number=1;

  addToCart(product:any){
    this.cart.pname=product.pname;
    this.cart.pdescription=product.pdescription;
    this.cart.price=product.price;
    this.cart.img=product.img;
    this.cart.price=product.price;
    this.cart.totalPrice=product.totalPrice;
    this.cart.quantity=this.quantity;
    this.cart.pid=product.id;
    this.cartsvc.addToCart(this.cart);
    console.log(product.id);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'success',
      title: 'Item added successfully'
    })
    this.cartsvc.getCount();
  }


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
