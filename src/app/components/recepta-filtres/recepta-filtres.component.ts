
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recepta-filtres',
  imports: [FormsModule],
  templateUrl: './recepta-filtres.component.html',
  styleUrl: './recepta-filtres.component.scss',
})
export class ReceptaFiltresComponent {
  @Input() categories: string[] = [];

  @Output() categoriaCanviada = new EventEmitter<string>();

  categoriaSeleccionada = '';

  aplicarFiltre(): void {
    this.categoriaCanviada.emit(this.categoriaSeleccionada);
  }
}
