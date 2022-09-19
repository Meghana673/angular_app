import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  cont: Contact[]=
  [
    {
      "branch":"Bangalore",
      "mail":"style.banglore@gmail.com",
      "mobile": "7631103764",
      "address":"main road 5th cross ramanagar Bengaluru, 560103"

    },
    {

      "branch":"Mumbai",
      "mail":"style.mumbai@gmail.com",
      "mobile": "6361238978",
      "address":"B.N Bhavan 2nd cross Mumbai, 400051 "

    },
    {

      "branch":"Chennai",
      "mail":"style.chennai@gmail.com",
      "mobile": "8512345035",
      "address":"4th main road kodambakkam chennai, 600102 "

    },

  ]
  public getDetails(): any {
    const contObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.cont);
      }, 1000);
    });
    return contObservable;
  }
}
