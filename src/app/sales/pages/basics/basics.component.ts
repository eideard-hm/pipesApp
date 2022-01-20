import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  nombreLower: string = 'edier';
  nombreUpper: string = 'Hernández';
  nombreCompleto: string = 'eDiEr herNaNdEz'

  fecha: Date = new Date();

}
