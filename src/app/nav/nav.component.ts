import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  auth:boolean=false;

  cartCount: number=0;
  constructor(private authService:UserService,private cartSvc:CartService) { }

  ngOnInit(): void {
    this.authService.authSubject.subscribe(
      data =>
      {
        console.log('auth inside nav component: ' + data);
        this.auth = data;
      }
    );
    this.cartSvc.getCartItems().subscribe (
      (response) =>
       {
        this.cartCount=response.length;
        console.log(this.cartCount);
       }
     )
    this.cartSvc.countSubject.subscribe (
      (response) =>
       {
        this.cartCount=response;
        console.log(this.cartCount);
       }
     )
    }

    sfun()
    {
      alert('There is no such product');
    }

  }






