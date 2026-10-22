
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recepta } from '../../models/recepta.model';
import { CategoriaEtiquetaComponent } from '../categoria-etiqueta/categoria-etiqueta.component';

@Component({
  selector: 'app-recepta-targeta',
  imports: [CategoriaEtiquetaComponent],
  templateUrl: './recepta-targeta.component.html',
  styleUrl: './recepta-targeta.component.scss',
})
export class ReceptaTargetaComponent {
  @Input({ required: true }) recepta!: Recepta;

  @Output() seleccionada = new EventEmitter<Recepta>();

  seleccionarRecepta(): void {
    this.seleccionada.emit(this.recepta);
  }
}