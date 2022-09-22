import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counterchild',
  templateUrl: './counterchild.component.html',
  styleUrls: ['./counterchild.component.css']
})
export class CounterchildComponent implements OnInit {

  constructor() { }
  @Output() countEmmitter =new EventEmitter();

  counterValue=1;
  countLessThenOne=true;
  c=12;

  quantity:number=1;
  PostValue(){
    this.countEmmitter.emit(this.counterValue);
  }

  decrement(){
    if(this.counterValue==1)
    {
      this.countLessThenOne=false;
    }
    else{
      this.countLessThenOne=true;
      this.counterValue--;
    }
    this.PostValue();
  }

  increment(){
    if(this.counterValue==12)
    {
      this.countLessThenOne=false;
      this.decrement();
    }
    else{
      this.countLessThenOne=true;
      this.counterValue++;
    }
    this.PostValue();
  }
    // this.counterValue++;
    // this.countLessThenOne=true;
    // this.PostValue();
  // }


  ngOnInit(): void {
  }

}
