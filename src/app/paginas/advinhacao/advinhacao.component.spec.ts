import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvinhacaoComponent } from './advinhacao.component';

describe('AdvinhacaoComponent', () => {
  let component: AdvinhacaoComponent;
  let fixture: ComponentFixture<AdvinhacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvinhacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvinhacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
