
import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  inject
} from '@angular/core';

import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { ReceptesApiService } from '../../services/receptes-api.service';
import { termeExisteixValidator } from '../../validators/terme-existeix.validator';

@Component({
  selector: 'app-recepta-filtres',
  imports: [ReactiveFormsModule],
  templateUrl: './recepta-filtres.component.html',
  styleUrl: './recepta-filtres.component.scss',
})
export class ReceptaFiltresComponent implements OnInit {

  @Input() categories: string[] = [];

  @Output() filtreAplicat = new EventEmitter<{
    text: string;
    categoria: string;
  }>();

  private readonly receptesApi = inject(ReceptesApiService);

  formulari!: FormGroup;
  historialCerques: string[] = [];

  private readonly clauHistorial = 'historialCercaReceptes';

  ngOnInit(): void {
    this.formulari = new FormGroup({
      textCerca: new FormControl('', {
        validators: [Validators.minLength(3)],
        asyncValidators: [
          termeExisteixValidator(this.receptesApi)
        ]
      }),
      categoria: new FormControl('')
    });

    this.carregarHistorial();
  }

  aplicarFiltre(): void {
    if (this.formulari.invalid || this.formulari.pending) {
      this.formulari.markAllAsTouched();
      return;
    }

    const text = String(
      this.formulari.value.textCerca ?? ''
    ).trim();

    const categoria = this.formulari.value.categoria ?? '';

    this.filtreAplicat.emit({ text, categoria });

    if (text.length >= 3) {
      this.desarCerca(text);
    }
  }

  restablirFiltres(): void {
    this.formulari.reset({
      textCerca: '',
      categoria: ''
    });

    this.filtreAplicat.emit({
      text: '',
      categoria: ''
    });
  }

  private carregarHistorial(): void {
    try {
      const dades = localStorage.getItem(this.clauHistorial);

      if (dades) {
        const historial = JSON.parse(dades);

        if (Array.isArray(historial)) {
          this.historialCerques = historial.filter(
            (terme): terme is string => typeof terme === 'string'
          );
        }
      }
    } catch (error) {
      console.error('No s’ha pogut llegir l’historial:', error);
      this.historialCerques = [];
    }
  }

  private desarCerca(terme: string): void {
    try {
      const historialActualitzat =
        this.historialCerques[0] === terme
          ? this.historialCerques
          : [terme, ...this.historialCerques].slice(0, 5);

      this.historialCerques = historialActualitzat;

      localStorage.setItem(
        this.clauHistorial,
        JSON.stringify(this.historialCerques)
      );
    } catch (error) {
      console.error('No s’ha pogut desar l’historial:', error);
    }
  }

  recuperarCerca(terme: string): void {
    this.formulari.patchValue({
      textCerca: terme
    });
  }
}
