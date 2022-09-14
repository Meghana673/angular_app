import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  productdetails=[
    {
    "pid":'001',
    "image":"assets/hp.jpg",
    "pname":"Laptop",
    "pdescription":"11th gen core i3/8gb ram/512gb ssd",
    "Status":"In Stock"
    },
    {
      "pid":'002',
      "image":"assets/boat.jpg",
      "pname":"Headphones",
      "pdescription":"boAt Rockerz 518 Wireless Headphones",
      "Status":"In Stock"
      },
      {
        "pid":'003',
        "image":"assets/mouse.jpg",
        "pname":"mouse",
        "pdescription":"wireless mouse",
        "Status":"Out of Stock"
        },
        {
          "pid":'004',
          "image":"assets/kurta.jpg",
          "pname":"Dress",
          "pdescription":"Ptinted designer kurta",
          "Status":"Out of Stock"
          },
          {
            "pid":'005',
            "image":"assets/bag.jpg",
            "pname":"Handbag",
            "pdescription":"Printed white and blue duffle bag",
            "Status":"Out of Stock"
            },

            {
              "pid":'006',
              "image":"assets/shoes.jpg",
              "pname":"Shoes",
              "pdescription":"Sneakers for Men Casual Shoes for Men",
              "Status":"In Stock"
              },
              {
                "pid":'007',
                "image":"assets/pendrive.jpg",
                "pname":"Sandisk",
                "pdescription":"SanDisk Ultra Dual 64GB USB 3.0 OTG Pen Drive (Gold)",
                "Status":"In Stock"
                },
                {
                  "pid":'008',
                  "image":"assets/hoody.jpg",
                  "pname":"Hoody",
                  "pdescription":"Women's Teen Girls Cotton Full Sleeve Cat Printing Hoodie Sweatshirt",
                  "Status":"Out of Stock"
                  },
                {
                "pid":'009',
                "image":"assets/watch.jpg",
                "pname":"Smart Watch",
                "pdescription":"Blue Aluminium Case with Abyss Blue Sport Band - Regular",
                "Status":"In Stock"
                },

    ]
}
