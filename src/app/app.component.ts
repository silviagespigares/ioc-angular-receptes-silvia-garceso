
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Recepta } from './models/recepta.model';
import { RECEPTES_MOCK } from './data/receptes.mock';
import { ReceptaLlistaComponent } from './components/recepta-llista/recepta-llista.component';
import { ReceptaFiltresComponent } from './components/recepta-filtres/recepta-filtres.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ReceptaLlistaComponent,
    ReceptaFiltresComponent,
  ],
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App {
  public appName = 'Receptes de Silvia Garceso';

  receptes: Recepta[] = RECEPTES_MOCK;

  categoriaSeleccionada = '';

  receptaSeleccionada: Recepta | null = null;

  get categories(): string[] {
    return [...new Set(RECEPTES_MOCK.map((recepta) => recepta.categoria))];
  }

  get receptesFiltrades(): Recepta[] {
    if (!this.categoriaSeleccionada) {
      return this.receptes;
    }

    return this.receptes.filter(
      (recepta) => recepta.categoria === this.categoriaSeleccionada,
    );
  }

  aplicarFiltre(categoria: string): void {
    this.categoriaSeleccionada = categoria;
    this.receptaSeleccionada = null;
  }

  seleccionarRecepta(recepta: Recepta): void {
    this.receptaSeleccionada = recepta;
  }
}
