import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Cuenta } from 'src/app/moders/cuenta';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit{

  @Input() cuenta: Cuenta = new Cuenta();
  @Output() deleteItem: EventEmitter<Cuenta> = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
    //this.cuenta = []
   
  }

  onDelete( cuenta: Cuenta ){
    this.deleteItem.emit(cuenta);
  }

  onToggle(cuenta: Cuenta){
    cuenta.estado = !cuenta.estado;
  }

}
