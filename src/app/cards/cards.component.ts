import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CartService } from '../cart.service';
import { Cartitem } from '../cartitem';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private cartsvc:CartService) { }

  ngOnInit(): void {
  }
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

  wish(product:any){
    // this.cart.pname=product.pname;
    // this.cart.pdescription=product.pdescription;
    // this.cart.price=product.price;
    // this.cart.img=product.img;
    // this.cart.price=product.price;
    // this.cart.totalPrice=product.totalPrice;
    // this.cart.quantity=this.quantity;
    // this.cart.pid=product.id;

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
      title: 'You will be notified when product is back'
    })

  }

  productdetails=[
    {
    "pid":'001',
    "img":"assets/casual.jpg",
    "price": 1500,
    "pname":"Long casual dress",
    "pdescription":"Casual Wear Western Maxi Dress Gown for Girl/Women/Ladies",
    "Status":"In Stock"
    },
    {
      "pid":'002',
      "img":"assets/hoody.jpg",
      "price": 659,
      "pname":"Hoody",
      "pdescription":"Women's  Cotton Full Sleeve Cat Printing Hoodie Sweatshirt",
      "Status":"Out of Stock"
      },

      {
        "pid":'003',
        "img":"assets/sharara.jpg",
        "price": 1800,
        "pname":"Kurta set",
        "pdescription":"Dark green embroidered sharara set with lime green dupatta",
        "Status":"Out of Stock"
        },
        {
          "pid":'004',
          "img":"assets/top3.jpg",
          "price": 699,
          "pname":"Top",
          "pdescription":"Schiffli Embroidered Top with Puff Sleeves",
          "Status":"Out of Stock"
          },
          {
            "pid":'005',
            "img":"assets/bag.jpg",
            "price": 840,
            "pname":"Handbag",
            "pdescription":"Printed white and blue duffle women bag",
            "Status":"Out of Stock"
            },

            {
              "pid":'006',
              "img":"assets/shoes.jpg",
              "price": 999,
              "pname":"Shoes",
              "pdescription":"Sneakers for Men Casual Shoes for Men",
              "Status":"In Stock"
              },
              {
                "pid":'007',
                "img":"assets/k1.jpg",
                "price": 731,
                "pname":"Aks Fashion",
                "pdescription":"Floral Print Anarkali Kurta with Tie-Up",
                "Status":"In Stock"
                },
                {
                  "pid":'008',
                  "img":"assets/k2.jpg",
                  "price": 499,
                  "pname":"Fusion",
                  "pdescription":"Floral Print Sleeveless Flared Kurta",
                  "Status":"In Stock"
                  },
                {
                "pid":'009',
                "img":"assets/k3.jpg",
                "price": 490,
                "pname":"AVAASA",
                "pdescription":"Micro Print Collar-Neck Straight Kurta",
                "Status":"In Stock"
                },

    ]
}
