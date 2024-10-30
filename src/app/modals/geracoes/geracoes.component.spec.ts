import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeracoesComponent } from './geracoes.component';

describe('GeracoesComponent', () => {
  let component: GeracoesComponent;
  let fixture: ComponentFixture<GeracoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeracoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeracoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
