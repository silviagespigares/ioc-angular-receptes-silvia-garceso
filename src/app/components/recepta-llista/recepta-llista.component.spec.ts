import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceptaLlista } from './recepta-llista.component';

describe('ReceptaLlista', () => {
  let component: ReceptaLlista;
  let fixture: ComponentFixture<ReceptaLlista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptaLlista],
    }).compileComponents();

    fixture = TestBed.createComponent(ReceptaLlista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
