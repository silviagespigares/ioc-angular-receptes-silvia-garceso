
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { ReceptaTargetaComponent } from './recepta-targeta.component';
import { Recepta } from '../../models/recepta.model';

describe('ReceptaTargetaComponent', () => {
  let component: ReceptaTargetaComponent;
  let fixture: ComponentFixture<ReceptaTargetaComponent>;

  const receptaProva: Recepta = {
    id: 1,
    nom: 'Truita de patates',
    descripcio: 'Truita tradicional amb patates i ous',
    categoria: 'primers',
    dataCreacio: '2026-01-01',
    tempsPreparacio: 30,
    destacada: true
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptaTargetaComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ReceptaTargetaComponent);
    fixture.componentRef.setInput('recepta', receptaProva);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('hauria de crear el component', () => {
    expect(component).toBeTruthy();
  });

  it('hauria de rebre la recepta indicada', () => {
    expect(component.recepta.nom).toBe('Truita de patates');
  });

  it("hauria d'emetre la recepta quan se selecciona", () => {
    const emissio = vi.spyOn(component.seleccionada, 'emit');

    component.seleccionarRecepta();

    expect(emissio).toHaveBeenCalledWith(receptaProva);
  });
});
