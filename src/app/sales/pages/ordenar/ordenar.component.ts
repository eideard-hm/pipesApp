import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  isMayuscula: boolean = true;
  ordenarPor: string = 'sin valor';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      volar: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      volar: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      volar: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      volar: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna verde',
      volar: true,
      color: Color.verde
    }
  ]

  toggleMayusculas(){
    this.isMayuscula = !this.isMayuscula;
  }

  toggleOrdenar(value: string){
    this.ordenarPor = value;
  }
}
