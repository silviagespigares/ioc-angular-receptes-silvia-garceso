import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceptaLlistaComponent } from './recepta-llista.component';

describe('ReceptaLlistaComponent', () => {
  let component: ReceptaLlistaComponent;
  let fixture: ComponentFixture<ReceptaLlistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptaLlistaComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ReceptaLlistaComponent);
    fixture.componentRef.setInput('receptes', []);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('hauria de crear el component', () => {
    expect(component).toBeTruthy();
  });

  it('hauria de començar amb una llista buida', () => {
    expect(component.receptes.length).toBe(0);
  });
});