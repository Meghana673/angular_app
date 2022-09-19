import { Component, OnInit } from '@angular/core';
import * as product_details from "../data/products.json";

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  prod:any=(product_details as any).default;



}
