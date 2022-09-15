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
    "image":"assets/casual.jpg",
    "price": 1500,
    "pname":"Long casual dress",
    "pdescription":"Casual Wear Western Maxi Dress Gown for Girl/Women/Ladies",
    "Status":"In Stock"
    },
    {
      "pid":'002',
      "image":"assets/hoody.jpg",
      "price": 659,
      "pname":"Hoody",
      "pdescription":"Women's Teen Girls Cotton Full Sleeve Cat Printing Hoodie Sweatshirt",
      "Status":"Out of Stock"
      },

      {
        "pid":'003',
        "image":"assets/sharara.jpg",
        "price": 1800,
        "pname":"Kurta set",
        "pdescription":"Dark green embroidered sharara set with lime green dupatta",
        "Status":"Out of Stock"
        },
        {
          "pid":'004',
          "image":"assets/top3.jpg",
          "price": 699,
          "pname":"Top",
          "pdescription":"Schiffli Embroidered Top with Puff Sleeves",
          "Status":"Out of Stock"
          },
          {
            "pid":'005',
            "image":"assets/bag.jpg",
            "price": 840,
            "pname":"Handbag",
            "pdescription":"Printed white and blue duffle women bag",
            "Status":"Out of Stock"
            },

            {
              "pid":'006',
              "image":"assets/shoes.jpg",
              "price": 999,
              "pname":"Shoes",
              "pdescription":"Sneakers for Men Casual Shoes for Men",
              "Status":"In Stock"
              },
              {
                "pid":'007',
                "image":"assets/k1.jpg",
                "price": 731,
                "pname":"Aks Fashion",
                "pdescription":"Floral Print Anarkali Kurta with Tie-Up",
                "Status":"In Stock"
                },
                {
                  "pid":'008',
                  "image":"assets/k2.jpg",
                  "price": 499,
                  "pname":"Fusion",
                  "pdescription":"Floral Print Sleeveless Flared Kurta",
                  "Status":"In Stock"
                  },
                {
                "pid":'009',
                "image":"assets/k3.jpg",
                "price": 490,
                "pname":"AVAASA",
                "pdescription":"Micro Print Collar-Neck Straight Kurta",
                "Status":"In Stock"
                },

    ]
}
