
import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  Subject,
  catchError,
  finalize,
  map,
  of,
  startWith,
  switchMap,
  tap,
  throwError
} from 'rxjs';

import { API_BASE_URL } from '../config/api.config';
import { ReceptaApi } from '../models/recepta-api.model';
import { Recepta } from '../models/recepta.model';
import { adaptarRecepta, adaptarReceptes } from '../adapters/recepta.adapter';

@Injectable({
  providedIn: 'root'
})
export class ReceptesApiService {
  private readonly http = inject(HttpClient);

  // Estats que poden consultar els components
  private readonly _receptes = signal<Recepta[]>([]);
  readonly receptes = this._receptes.asReadonly();

  private readonly _carregant = signal(false);
  readonly carregant = this._carregant.asReadonly();

  private readonly _error = signal<string | null>(null);
  readonly error = this._error.asReadonly();

  // Permet repetir l'última consulta
  private readonly reintents = new Subject<string>();
  private ultimaConsulta = '';

  // GET: obtenir les receptes de l'API
  obtenirReceptes(terme = ''): Observable<Recepta[]> {
    this.ultimaConsulta = terme;

    return this.reintents.pipe(
      startWith(terme),
      tap(() => {
        this._carregant.set(true);
        this._error.set(null);
      }),
      switchMap((text) =>
        this.http.get<ReceptaApi[]>(`${API_BASE_URL}/receptes`, {
          params: text ? { q: text } : {}
        }).pipe(
          map((dadesApi) => adaptarReceptes(dadesApi)),
          tap((receptes) => this._receptes.set(receptes)),
          catchError(() => {
            this._error.set('No s’han pogut carregar les receptes.');
            return of([]);
          }),
          finalize(() => this._carregant.set(false))
        )
      )
    );
  }

  // POST: crear una recepta nova
  crearRecepta(novaRecepta: Omit<Recepta, 'id'>): Observable<Recepta> {
    this._carregant.set(true);
    this._error.set(null);

    return this.http.post<ReceptaApi>(
      `${API_BASE_URL}/receptes`,
      novaRecepta
    ).pipe(
      map((dadaApi) => adaptarRecepta(dadaApi)),
      tap((receptaCreada) => {
        this._receptes.update((actuals) => [...actuals, receptaCreada]);
      }),
      catchError((error) => {
        this._error.set('No s’ha pogut crear la recepta.');
        return throwError(() => error);
      }),
      finalize(() => this._carregant.set(false))
    );
  }

  // Repetir l'última consulta
  reintentar(): void {
    this.reintents.next(this.ultimaConsulta);
  }


  // Comprovar si existeixen receptes que coincideixin amb el terme
  comprovarTerme(terme: string): Observable<boolean> {
    return this.http.get<ReceptaApi[]>(`${API_BASE_URL}/receptes`).pipe(
      map((dadesApi) => {
        const cerca = terme.trim().toLocaleLowerCase();

        return dadesApi.some((recepta) => {
          const nom = recepta.nom ?? '';
          const descripcio = recepta.descripcio ?? '';

          return (
            nom.toLocaleLowerCase().includes(cerca) ||
            descripcio.toLocaleLowerCase().includes(cerca)
          );
        });
      })
    );
  }

}
