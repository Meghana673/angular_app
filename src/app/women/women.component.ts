import { Component, OnInit } from '@angular/core';
import * as prod_details from "../data/products.json";

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products:any=(prod_details as any).default;


  

}
