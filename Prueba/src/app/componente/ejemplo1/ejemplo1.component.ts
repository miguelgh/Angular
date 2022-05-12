// se importa el core de componentes de Angular
import { Component, OnInit } from '@angular/core';

@Component({
  //el selector defince como se va a llamar el componente, en este caso <app-ejemplo1></app-ejemplo1>
  selector: 'app-ejemplo1',
  // en templateUrl se defice el html del componente
  templateUrl: './ejemplo1.component.html',
  // en styleUrls se define el css
  styleUrls: ['./ejemplo1.component.scss']
})
// se exporta el componente para ser usado en el proyecto
export class Ejemplo1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
