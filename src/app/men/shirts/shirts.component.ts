import { Component, OnInit } from '@angular/core';
import * as shirt from "../shirts.json";

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  shirts:any=(shirt as any).default;
}
