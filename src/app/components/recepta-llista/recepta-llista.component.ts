
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recepta } from '../../models/recepta.model';
import { ReceptaTargetaComponent } from '../recepta-targeta/recepta-targeta.component';

@Component({
  selector: 'app-recepta-llista',
  imports: [ReceptaTargetaComponent],
  templateUrl: './recepta-llista.component.html',
  styleUrl: './recepta-llista.component.scss',
})
export class ReceptaLlistaComponent {
  @Input({ required: true }) receptes: Recepta[] = [];

  @Output() receptaSeleccionada = new EventEmitter<Recepta>();

  seleccionarRecepta(recepta: Recepta): void {
    this.receptaSeleccionada.emit(recepta);
  }
}