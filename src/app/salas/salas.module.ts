import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListarSalasComponent} from "./listar-salas/listar-salas.component";
import {CrearSalaComponent} from "./crear-sala/crear-sala.component";





@NgModule({
  declarations: [
    ListarSalasComponent,
    CrearSalaComponent
  ],
  exports:[
    ListarSalasComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class SalasModule { }
