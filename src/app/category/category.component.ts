import { Component, OnInit } from '@angular/core';
import * as type from "../data/type.json"
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  variety:any=(type as any).default;
}
