import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Sala} from "../model/sala";
import {SalaService} from "../service/sala.service";


@Component({
  selector: 'app-listar-salas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-salas.component.html',
  styleUrl: './listar-salas.component.css'
})
export class ListarSalasComponent implements OnInit{
  public salas: Array<Sala> = [];
  public nombreSala!:String;

  constructor(private salaService: SalaService) {
    this.salaService.getSala().subscribe(salas:Array<Sala>):=> {
      this.salas = salas;
    }
  }

  ngOnInit(): void {
    this.salas[0] ={id:1,sala:'angular',programa:'programacion'};
  }
}
