import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Sala} from "../model/sala";

@Component({
  selector: 'app-detalle-sala',
  templateUrl: './detalle-sala.component.html',
  styleUrl: './detalle-sala.component.css'
})
export class DetalleSalaComponent {

  @Input() sala!: Sala;
}
