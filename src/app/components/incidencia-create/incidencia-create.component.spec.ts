import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaCreateComponent } from './incidencia-create.component';

describe('IncidenciaCreateComponent', () => {
  let component: IncidenciaCreateComponent;
  let fixture: ComponentFixture<IncidenciaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidenciaCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidenciaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
