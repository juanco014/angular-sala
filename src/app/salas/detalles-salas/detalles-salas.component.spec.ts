import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesSalasComponent } from './detalles-salas.component';

describe('DetallesSalasComponent', () => {
  let component: DetallesSalasComponent;
  let fixture: ComponentFixture<DetallesSalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesSalasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallesSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
