import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  productname:any | undefined;



  @Input('product')

  set pname(pname:any)
  {
    this.productname=pname || 'not found';
    console.log(pname)
  }

  get pname():string
  {
    return this.productname;
  }
}
