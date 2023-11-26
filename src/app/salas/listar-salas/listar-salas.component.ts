import {Component, OnInit} from '@angular/core';
import {Sala} from "../model/sala";
import {SalaService} from "../service/sala.service";
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector: 'app-listar-salas',
  templateUrl: './listar-salas.component.html',
  styleUrl: './listar-salas.component.css'
})
export class ListarSalasComponent implements OnInit{
  public salas: Array<Sala> = [];
  public nombreSala!:String;
  public salaSelected!:Sala;
  public selected: boolean=false;


  constructor(private salaService: SalaService, private routerPath: Router, private router: ActivatedRoute) {
    this.salaService.getSalas().subscribe
        ( (salas:  Array<Sala>)=> {
      this.salas = salas;
    }
        );
  }

  ngOnInit(): void {
    this.salas[0] ={id:1,sala:'angular',programa:'programacion'};
  }


  onselected(sala: Sala) {
    this.salaSelected = sala;
    this.selected = true;
    //this.router.navigate(['/salas/detalle',sala.id]); //cositas aparte
  }
}
