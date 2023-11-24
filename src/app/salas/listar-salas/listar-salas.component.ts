import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Sala} from "../model/sala";
import {SalaService} from "../service/sala.service";
import {DetalleSalaComponent} from "../detalle-sala/detalle-sala.component";


@Component({
  selector: 'app-listar-salas',
  standalone: true,
  imports: [CommonModule, DetalleSalaComponent],
  templateUrl: './listar-salas.component.html',
  styleUrl: './listar-salas.component.css'
})
export class ListarSalasComponent implements OnInit{
  public salas: Array<Sala> = [];
  public nombreSala!:String;
  public salaSelected!:Sala;
  public selected: boolean=false;

  constructor(private salaService: SalaService) {
    this.salaService.getSalas().subscribe
        ( (salas:  Array<Sala>)=> {
      this.salas = salas;
    }
        );
  }

  ngOnInit(): void {
    this.salas[0] ={id:1,sala:'angular',programa:'programacion'};
  }

    protected readonly onselect = onselect;

  onselected(sala: Sala) {
    this.salaSelected = sala;
    this.selected = true;
  }
}
