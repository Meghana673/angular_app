import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name="Alice";
  shop="assets/shop.jpg";
  img1="assets/c3.jpg";
  img2="assets/c2.jpg";
  img3="assets/c1.jpg";


  names="john";
  prodEntered: string=" ";


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
