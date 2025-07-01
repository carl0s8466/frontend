import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaDetailComponent } from './incidencia-detail.component';

describe('IncidenciaDetailComponent', () => {
  let component: IncidenciaDetailComponent;
  let fixture: ComponentFixture<IncidenciaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidenciaDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidenciaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
