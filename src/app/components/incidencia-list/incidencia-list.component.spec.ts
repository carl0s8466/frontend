import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaListComponent } from './incidencia-list.component';

describe('IncidenciaListComponent', () => {
  let component: IncidenciaListComponent;
  let fixture: ComponentFixture<IncidenciaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidenciaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidenciaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
