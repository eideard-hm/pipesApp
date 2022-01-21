import { Component } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent{

  // i18nSelect Pipe
  nombre: string = 'Edier';
  genero: string = 'masculino';

  invitacionObj = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural Pipe
  clientes: string [] = ['Maria', 'Edier', 'Judith', 'Karoll', 'Ximena'];

  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',
  }

}
