import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaEtiqueta } from './categoria-etiqueta.component';

describe('CategoriaEtiqueta', () => {
  let component: CategoriaEtiqueta;
  let fixture: ComponentFixture<CategoriaEtiqueta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaEtiqueta],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriaEtiqueta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
