import { Component, Input, OnInit ,EventEmitter, Output} from '@angular/core';


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



  // @Input('product')
  @Output() searchtextent=new EventEmitter();

enterval:string='';

onsearch()
{
  this.searchtextent.emit(this.enterval);
}

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
