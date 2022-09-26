import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdeals',
  templateUrl: './tdeals.component.html',
  styleUrls: ['./tdeals.component.css']
})
export class TdealsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchText:string='';
  onsearchtext(searchval:string){
    this.searchText=searchval;
    //console.log(this.searchText);

  }
  products=[
    {
      "pid":1,
     "img":"assets/d1.jpg",
      "name":"Western dress",
      "pdesc":"Floral Print Fit & Flare Dress",
      "offer":"Up to 51% off",
      "days":"Ends in: 7 days"
    },
    {
      "pid":2,
      "img":"assets/d2.jpg",
      "name":"Trousers",
      "pdesc":"High Waist Tapered Trousers",
      "s":"only few left",
      "offer":"Up to 80% off",
      "days":"Ends in: 6 days"
    },
    {
      "pid":3,
     "img":"assets/d3.jpg",
      "name":"Western dress",
      "pdesc":"Dark Green Crepe Pocket Front Pinafore Dress",
      "offer":"Up to 51% off",
      "days":"Ends in: 7 days"
    },
    {
      "pid":4,
      "img":"assets/d4.jpg",
      "name":"Trousers",
      "pdesc":"Black High Waist Wide Leg Trousers",
      "offer":"Up to 75% off",
      "days":"Ends in: 3 days"
    },
    {
      "pid":5,
     "img":"assets/d5.jpg",
      "name":"Joggers",
      "pdesc":"Stone Tie Waist Cuffed Joggers",
      "offer":"Up to 35% off",
      "s":"only few left",
      "days":"Ends in: 1 day"
    },
    {
      "pid":6,
      "img":"assets/d8.jpg",
      "name":"Shoes",
      "pdesc":"Camel Faux Fur Pom Pom Slipper Boots",
      "offer":"Up to 31% off",
      "days":"Ends in: 3 days"
    },
    {
      "pid":7,
     "img":"assets/d6.jpg",
      "name":"Coats & Jackets",
      "pdesc":"Black Check Long Coat",
      "offer":"Up to 53% off",
      "days":"Ends in: 8 days"
    },
    {
      "pid":8,
      "img":"assets/d7.jpg",
      "name":"Coats & Jackets",
      "pdesc":"Dark Grey Denim Western Jacket",
      "offer":"Up to 67% off",
      "days":"Ends in: 5 days"
    },
    {
      "pid":9,
      "img":"assets/d9.jpg",
      "name":"Shoes",
      "pdesc":"",
      "s":"only few left Hurry up!!",
      "offer":"Up to 47% off",
      "days":"Ends in: 2 days"
    },

  ]
}
