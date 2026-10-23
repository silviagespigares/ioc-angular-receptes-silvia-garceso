
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

  @Output() filtreAplicat = new EventEmitter<{
    text: string;
    categoria: string;
  }>();

  textCerca = '';
  categoriaSeleccionada = '';

aplicarFiltre(): void {
  this.filtreAplicat.emit({
    text: this.textCerca.trim(),
    categoria: this.categoriaSeleccionada,
  });
}

  restablirFiltres(): void {
    this.textCerca = '';
    this.categoriaSeleccionada = '';

    this.aplicarFiltre();
  }
}
