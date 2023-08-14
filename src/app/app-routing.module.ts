import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';

const routes: Routes = [

  {
    path:'',
    component: CuentasComponent
  },
  {
    path:'crear',
    component: CrearCuentaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
