import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusPetsComponent } from './meus-pets.component';

describe('MeusPetsComponent', () => {
  let component: MeusPetsComponent;
  let fixture: ComponentFixture<MeusPetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeusPetsComponent]
    });
    fixture = TestBed.createComponent(MeusPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
