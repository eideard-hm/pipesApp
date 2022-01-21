import { Component } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent{

  nombre: string = 'Edier';
  genero: string = 'masculino';

  invitacionObj = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

}
