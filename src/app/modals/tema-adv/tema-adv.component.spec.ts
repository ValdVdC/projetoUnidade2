import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaAdvComponent } from './tema-adv.component';

describe('TemaAdvComponent', () => {
  let component: TemaAdvComponent;
  let fixture: ComponentFixture<TemaAdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemaAdvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemaAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
