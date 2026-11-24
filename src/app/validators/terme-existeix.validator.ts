
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, timer, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs';

import { ReceptesApiService } from '../services/receptes-api.service';

export function termeExisteixValidator(
  servei: ReceptesApiService
): AsyncValidatorFn {
  return (control: AbstractControl): Observable<any> => {
    const terme = String(control.value ?? '').trim();

    // No consultem l'API si el camp està buit
    if (!terme) {
      return of(null);
    }

    // Esperem 500 ms abans de consultar l'API
    return timer(500).pipe(
      switchMap(() => servei.comprovarTerme(terme)),
      map((existeix) =>
        existeix ? null : { senseResultats: true }
      ),
      catchError(() => of({ errorConsulta: true }))
    );
  };
}
