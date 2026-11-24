import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaEtiquetaComponent } from './categoria-etiqueta.component';

describe('CategoriaEtiquetaComponent', () => {
  let component: CategoriaEtiquetaComponent;
  let fixture: ComponentFixture<CategoriaEtiquetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaEtiquetaComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriaEtiquetaComponent);
    fixture.componentRef.setInput('categoria', 'postres');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('hauria de crear el component', () => {
    expect(component).toBeTruthy();
  });

  it('hauria de rebre la categoria indicada', () => {
    expect(component.categoria).toBe('postres');
  });
});