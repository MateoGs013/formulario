import { Component, OnInit } from '@angular/core';
import { Cuenta } from '../../moders/cuenta'

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {

  cuentas: Cuenta[] = [];

  constructor() { }

  ngOnInit(): void {

    this.cuentas = [
      {
        id: 'Mjordan',
        nombre: 'Michael',
        apellido: 'Jordan',
        genero: 'Masculino',
        cumpleanos: new Date(),
        numero: 2994237336,
        direccion: 'cognac 732',
        email: 'jordan123@mail.com',
        contrasena: 'adminjeje',
        estado: false
      },
      {
        id: 'MJ',
        nombre: 'Maicol',
        apellido: 'yordan',
        genero: 'Masculino',
        cumpleanos: new Date(),
        numero: 2994237336,
        direccion: 'daikiri 847',
        email: 'xxjordanxx@mail.com',
        contrasena: 'yo123',
        estado: true
      }
    ]
  }

  deleteItem(cuenta: Cuenta) {
    this.cuentas = this.cuentas.filter(x => x.id != cuenta.id);
  }

  

}
