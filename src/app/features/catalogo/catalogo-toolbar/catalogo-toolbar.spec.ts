import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoToolbar } from './catalogo-toolbar';

describe('CatalogoToolbar', () => {
  let component: CatalogoToolbar;
  let fixture: ComponentFixture<CatalogoToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoToolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
