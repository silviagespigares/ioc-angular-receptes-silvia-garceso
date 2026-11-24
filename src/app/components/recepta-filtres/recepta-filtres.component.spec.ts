
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ReceptaFiltresComponent } from './recepta-filtres.component';
import { ReceptesApiService } from '../../services/receptes-api.service';

describe('ReceptaFiltresComponent', () => {
  let component: ReceptaFiltresComponent;
  let fixture: ComponentFixture<ReceptaFiltresComponent>;

  const serveiSimulat = {
    comprovarTerme: () => of(true)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptaFiltresComponent],
      providers: [
        {
          provide: ReceptesApiService,
          useValue: serveiSimulat
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ReceptaFiltresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it("hauria de crear el component", () => {
    expect(component).toBeTruthy();
  });

  it("hauria d'inicialitzar el formulari reactiu", () => {
    expect(component.formulari).toBeTruthy();
    expect(component.formulari.get('textCerca')).toBeTruthy();
    expect(component.formulari.get('categoria')).toBeTruthy();
  });

  it("hauria de netejar els filtres", () => {
    component.formulari.patchValue({
      textCerca: 'truita',
      categoria: 'primers'
    });

    component.restablirFiltres();

    expect(component.formulari.value.textCerca).toBe('');
    expect(component.formulari.value.categoria).toBe('');
  });
});
