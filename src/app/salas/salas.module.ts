import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SalasRoutingModule} from "./salas-routing.module";
import {CrearSalaComponent} from "./crear-sala/crear-sala.component";
import {DetalleSalaComponent} from "./detalle-sala/detalle-sala.component";
import {ListarSalasComponent} from "./listar-salas/listar-salas.component";
import {ReactiveFormsModule} from "@angular/forms";
import {EditarSalaComponent} from "./editar-sala/editar-sala.component";



// @ts-ignore
@NgModule({
  declarations: [
    CrearSalaComponent,
    DetalleSalaComponent,
    ListarSalasComponent,
    EditarSalaComponent
  ],
  exports: [
    ListarSalasComponent
  ],
    imports: [
        CommonModule,
        SalasRoutingModule,
        ReactiveFormsModule
    ]
})
export class SalasModule { }
