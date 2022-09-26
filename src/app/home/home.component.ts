import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  name="Alice";
  shop="assets/shop.jpg";
  img1="assets/c3.jpg";
  img2="assets/c2.jpg";
  img3="assets/c1.jpg";
  img4="assets/poster.jpg";


  names="john";
  prodEntered: string=" ";

wfun()
{
  this.router.navigateByUrl('women');
}
mfun()
{
  this.router.navigateByUrl('men');
}
// products:any[]=[
//   {
//     prodname:"Shoes"
//   },
//   {
//     prodname:"dress"
//   },
//   {
//     prodname:"perfumes"
//   },
//   {
//     prodname:"bags"
//   },

// ]
// visible:boolean=true;
//   hide(){
//     this.visible=!this.visible;

//   }


}
