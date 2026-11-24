
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Recepta } from './models/recepta.model';
import { RECEPTES_MOCK } from './data/receptes.mock';
import { ReceptaLlistaComponent } from './components/recepta-llista/recepta-llista.component';
import { ReceptaFiltresComponent } from './components/recepta-filtres/recepta-filtres.component';
import { DatePipe } from '@angular/common';
import { ReceptesApiService } from './services/receptes-api.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    DatePipe,
    ReceptaLlistaComponent,
    ReceptaFiltresComponent,
  ],
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App implements OnInit {
  private readonly receptesApi = inject(ReceptesApiService);

  public appName = 'Receptes de Silvia Garceso';

  receptes: Recepta[] = RECEPTES_MOCK;

  textCerca = '';
  categoriaSeleccionada = '';

  receptaSeleccionada: Recepta | null = null;

  ngOnInit(): void {
    this.receptesApi.obtenirReceptes().subscribe({
      next: (receptes: Recepta[]) => {
        this.receptes = receptes;
      },
      error: (error) => {
        console.error('Error en carregar les receptes de l’API:', error);
      }
    });
  }

  get categories(): string[] {
    return [...new Set(this.receptes.map((recepta) => recepta.categoria))];
  }

  get receptesFiltrades(): Recepta[] {
    return this.receptes.filter((recepta) => {
      const text = this.textCerca.toLocaleLowerCase();

      const coincideixText =
        recepta.nom.toLocaleLowerCase().includes(text) ||
        recepta.descripcio.toLocaleLowerCase().includes(text);

      const coincideixCategoria =
        !this.categoriaSeleccionada ||
        recepta.categoria === this.categoriaSeleccionada;

      return coincideixText && coincideixCategoria;
    });
  }

  aplicarFiltre(filtre: { text: string; categoria: string }): void {
    this.textCerca = filtre.text;
    this.categoriaSeleccionada = filtre.categoria;
    this.receptaSeleccionada = null;
  }

  seleccionarRecepta(recepta: Recepta): void {
    this.receptaSeleccionada = recepta;
  }
}
