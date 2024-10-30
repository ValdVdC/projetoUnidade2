import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DificuldadeComponent } from './dificuldade.component';

describe('DificuldadeComponent', () => {
  let component: DificuldadeComponent;
  let fixture: ComponentFixture<DificuldadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DificuldadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DificuldadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
