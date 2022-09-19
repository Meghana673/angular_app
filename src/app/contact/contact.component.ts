import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contServ:ContactService) { }
  cont:Contact[]=[];

  ngOnInit(): void {
    const contObservable= this.contServ.getDetails();
    contObservable.subscribe((contData: Contact[])=>{
      this.cont=contData;
    });

  }

}
