import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/moders/cuenta';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit{

  

    id: string = '';
    nombre: string = '';
    apellido: string = '';
    genero: string = '';
    cumpleanos: Date = new Date('1923-01-01');
    numero: number = 0;
    direccion: string = '';
    email: string = '';
    contrasena: string = '';

  constructor(){
   
  }


  ngOnInit(): void {
    
  }

  onSubmit(){
    const cuenta = new Cuenta();
    cuenta.id = this.id;
    cuenta.nombre = this.nombre;
    cuenta.apellido = this.apellido;
    cuenta.genero = this.genero;
    cuenta.cumpleanos = this.cumpleanos;
    cuenta.numero = this.numero;
    cuenta.direccion = this.direccion;
    cuenta.email = this.email;
    cuenta.contrasena = this.contrasena;
  }


}
