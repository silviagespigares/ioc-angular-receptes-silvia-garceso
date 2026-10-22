import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceptaTargeta } from './recepta-targeta.component';

describe('ReceptaTargeta', () => {
  let component: ReceptaTargeta;
  let fixture: ComponentFixture<ReceptaTargeta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptaTargeta],
    }).compileComponents();

    fixture = TestBed.createComponent(ReceptaTargeta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
