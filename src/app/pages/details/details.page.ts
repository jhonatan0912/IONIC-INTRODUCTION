import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  opcionSeleccionada = 1;


  constructor() { }

  ngOnInit() {
  }

  seleccionarOpcion(opcion: number) {
    this.opcionSeleccionada = opcion;
  }
}
