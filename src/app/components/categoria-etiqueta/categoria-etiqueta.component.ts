
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categoria-etiqueta',
  imports: [],
  templateUrl: './categoria-etiqueta.component.html',
  styleUrl: './categoria-etiqueta.component.scss',
})
export class CategoriaEtiquetaComponent {
  @Input({ required: true }) categoria = '';
}
