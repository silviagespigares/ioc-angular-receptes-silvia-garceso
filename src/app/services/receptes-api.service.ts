
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../config/api.config';
import { Recepta } from '../models/recepta.model';

@Injectable({
  providedIn: 'root'
})
export class ReceptesApiService {
  private readonly http = inject(HttpClient);

  obtenirReceptes() {
    return this.http.get<Recepta[]>(`${API_BASE_URL}/receptes`);
  }
}
