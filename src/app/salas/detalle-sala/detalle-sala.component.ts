import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Sala} from "../model/sala";

@Component({
  selector: 'app-detalle-sala',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-sala.component.html',
  styleUrl: './detalle-sala.component.css'
})
export class DetalleSalaComponent {

  @Input() sala!: Sala;
}
