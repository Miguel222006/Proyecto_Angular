import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Proyecto_Angular';

  logued = true

  nombre = ["Miguel"]

  veces = [1, 2, 3, 4, 5, 6]



  products = [
    {
      name: "Teclado",
      price: 2000,
      category: "Periferics",
      quantity: 200,
      brand: "Pepe",
      model: "1997"
    },

    {
      name: "Mouse",
      price: 1500,
      category: "Periferics",
      quantity: 300,
      brand: "Pepe",
      model: "X200"
    },

    {
      name: "Monitor",
      price: 25000,
      category: "Periferics",
      quantity: 120,
      brand: "VisionTech",
      model: "VT27"
    },

    {
      name: "Auriculares",
      price: 5000,
      category: "Periferics",
      quantity: 180,
      brand: "SoundPro",
      model: "SP-H1"
    },

    {
      name: "Impresora",
      price: 35000,
      category: "Periferics",
      quantity: 50,
      brand: "PrintMax",
      model: "PM3000"
    },

    {
      name: "Webcam",
      price: 8000,
      category: "Periferics",
      quantity: 90,
      brand: "Pepe",
      model: "CamX"
    },

    {
      name: "Parlantes",
      price: 7000,
      category: "Periferics",
      quantity: 140,
      brand: "AudioPlus",
      model: "AP-S20"
    },

    {
      name: "Microfono",
      price: 6000,
      category: "Periferics",
      quantity: 110,
      brand: "SoundPro",
      model: "Mic100"
    },

    {
      name: "Pad Mouse",
      price: 800,
      category: "Periferics",
      quantity: 500,
      brand: "Pepe",
      model: "PadSoft"
    },

    {
      name: "Joystick",
      price: 9000,
      category: "Periferics",
      quantity: 70,
      brand: "GameMaster",
      model: "GM-J1"
    },

    {
      name: "Router",
      price: 12000,
      category: "Periferics",
      quantity: 60,
      brand: "NetPlus",
      model: "NP-500"
    }


  ]
   

  main() {
    const frutas = ["Fresa", "Banano", "Sandia", "Pera"]

    for (let i = 0; i < frutas.length; i++) {
      console.log(frutas[i]);

    }
  }

}