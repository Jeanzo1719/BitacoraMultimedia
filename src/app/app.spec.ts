import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('debe mostrar el titulo de la portada', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Un espacio para compartir');
  });

  it('debe incluir las secciones navegables de la bitacora', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    for (const id of [
      'inicio',
      'escenario',
      'intervencion',
      'producto',
      'resultados',
      'aprendizaje',
    ]) {
      expect(compiled.querySelector(`#${id}`)).toBeTruthy();
    }
  });

  it('debe mostrar las tres preguntas de la bitacora de aprendizaje', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const texto = (fixture.nativeElement as HTMLElement).textContent ?? '';

    expect(texto).toContain('¿Qué hice?');
    expect(texto).toContain('¿Qué aprendí sobre el Humanismo Amigoniano?');
    expect(texto).toContain('¿Qué cambiaría si repitiera la experiencia?');
  });
});
