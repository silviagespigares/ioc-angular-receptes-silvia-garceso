
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
  public readonly receptesApi = inject(ReceptesApiService);

  public appName = 'Receptes de Silvia Garceso';

  receptes: Recepta[] = RECEPTES_MOCK;

  textCerca = '';
  categoriaSeleccionada = '';

  receptaSeleccionada: Recepta | null = null;
  missatgeCreacio = '';

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

  crearReceptaProva(): void {
    const novaRecepta: Omit<Recepta, 'id'> = {
      nom: 'Coca de recapte EAC3',
      descripcio: 'Coca casolana amb verdures escalivades.',
      categoria: 'plats principals',
      dataCreacio: new Date().toISOString().slice(0, 10),
      tempsPreparacio: 45,
      destacada: false
    };

    this.missatgeCreacio = '';

    this.receptesApi.crearRecepta(novaRecepta).subscribe({
      next: (receptaCreada) => {
        this.receptes = [...this.receptes, receptaCreada];
        this.missatgeCreacio = 'Recepta creada correctament a l’API.';
      },
      error: (error) => {
        console.error('Error en crear la recepta:', error);
        this.missatgeCreacio = 'No s’ha pogut crear la recepta.';
      }
    });
  }

  reintentarCarrega(): void {
    this.receptesApi.reintentar();
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
