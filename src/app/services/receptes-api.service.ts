
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { API_BASE_URL } from '../config/api.config';
import { ReceptaApi } from '../models/recepta-api.model';
import { Recepta } from '../models/recepta.model';
import { adaptarReceptes } from '../adapters/recepta.adapter';

@Injectable({
  providedIn: 'root'
})
export class ReceptesApiService {
  private readonly http = inject(HttpClient);

  obtenirReceptes() {
    return this.http.get<ReceptaApi[]>(`${API_BASE_URL}/receptes`).pipe(
      map((dadesApi) => adaptarReceptes(dadesApi))
    );
  }
}
