import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SalasRoutingModule} from "./salas-routing.module";
import {CrearSalaComponent} from "./crear-sala/crear-sala.component";
import {DetalleSalaComponent} from "./detalle-sala/detalle-sala.component";
import {ListarSalasComponent} from "./listar-salas/listar-salas.component";


@NgModule({
  declarations: [
    CrearSalaComponent,
    DetalleSalaComponent,
    ListarSalasComponent
  ],
  exports: [
    ListarSalasComponent
  ],
  imports: [
    CommonModule,
     SalasRoutingModule
  ]
})
export class SalasModule { }
