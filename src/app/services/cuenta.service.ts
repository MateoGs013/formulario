import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor() { }

  getCuentas(){
    return [
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
}
