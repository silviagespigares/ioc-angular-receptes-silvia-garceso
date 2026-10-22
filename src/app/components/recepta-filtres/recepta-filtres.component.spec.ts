import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceptaFiltres } from './recepta-filtres.component';

describe('ReceptaFiltres', () => {
  let component: ReceptaFiltres;
  let fixture: ComponentFixture<ReceptaFiltres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptaFiltres],
    }).compileComponents();

    fixture = TestBed.createComponent(ReceptaFiltres);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
