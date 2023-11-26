import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SalaService} from "../service/sala.service";
import {Sala} from "../model/sala";
import Swal from "sweetalert2";

@Component({
  selector: 'app-editar-sala',
  templateUrl: './editar-sala.component.html',
  styleUrl: './editar-sala.component.css'
})
export class EditarSalaComponent implements OnInit {
  public editarSalaForm: FormGroup=new FormGroup({
    sala: new FormControl('',[Validators.required,Validators.minLength(4)]),
    programa: new FormControl('',[Validators.required,Validators.minLength(4)]),
  })

  /**
   * Constructor del componente
   * @param router Router de la aplicacion
   * @param formBuilder Formulario de creacion de sala
   * @param salaService Servicio de sala para crear una sala
   */

  constructor(public router:Router,public formBuilder: FormBuilder,private salaService: SalaService) {

  }

  /**
   * metodo que crea una sala
   */
  cancelarCrearSala(){
    this.router.navigate(["/Listar"]);
  }

  /**
   * Metodo que edita un curso en el servicio
   * @param curso Curso a crear
   */

  editarSala(sala: Sala){
    this.salaService.editarSala(sala).subscribe(
      (sala:Sala) => {
        Swal.fire(
          'Curso creado',
          `La sala ${sala.sala} ha sido editado con exito`,
          'success'
        );
        this.editarSalaForm.reset();  //Resetea el formulario
        this.router.navigate(['/listar']);
      });
  }

  ngOnInit(): void {
    this.editarSalaForm = this.formBuilder.group({
      curso: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      programa: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
}
