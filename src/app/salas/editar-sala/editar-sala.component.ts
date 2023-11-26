import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SalaService} from "../service/sala.service";
import {Sala} from "../model/sala";
import Swal from "sweetalert2";

@Component({
  selector: 'app-editar-sala',
  templateUrl: './editar-sala.component.html',
  styleUrl: './editar-sala.component.css'
})
export class EditarSalaComponent implements OnInit {
  public editarSalaForm!: FormGroup;
    private sala!: Sala;


  /**
   * Constructor del componente
   * @param router Router de la aplicacion
   * @param formBuilder Formulario de creacion de sala
   * @param salaService Servicio de sala para crear una sala
   */

  constructor(public router:Router,public formBuilder: FormBuilder,private salaService: SalaService, private route:ActivatedRoute) {

  }

  /**
   * metodo que crea una sala
   */
  cancelarEditarSala(){
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
    const idSala:number = parseInt(this.route.snapshot.params["id"]);

    this.salaService.getSala(idSala).subscribe((sala:Sala) => {
      this.sala= sala;

      this.editarSalaForm = this.formBuilder.group({
        curso: [this.sala.sala, [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
        programa: [this.sala.programa, [Validators.required, Validators.minLength(4)]]
      });
    });
  }
}

