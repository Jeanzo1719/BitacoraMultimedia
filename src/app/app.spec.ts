import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { ESCENARIO, HERO, INTERVENCION, RESULTADO } from './core/bitacora-content';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  async function render(): Promise<HTMLElement> {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('debe mostrar el titulo de la portada', async () => {
    const compilado = await render();
    expect(compilado.querySelector('h1')?.textContent).toContain('Un espacio para compartir');
  });

  it('debe recorrer la bitacora en orden cronologico', async () => {
    const compilado = await render();
    const ids = [...compilado.querySelectorAll('section[id]')].map((s) => s.id);

    expect(ids).toEqual([HERO.id, ESCENARIO.id, INTERVENCION.id, RESULTADO.id, 'aprendizaje']);
  });

  it('debe usar solo la evidencia multimedia disponible', async () => {
    const compilado = await render();

    // una unica fotografia (reutilizada) y dos videos
    const fotos = new Set([...compilado.querySelectorAll('img')].map((i) => i.getAttribute('src')));
    expect(fotos.size).toBe(1);
    expect(compilado.querySelectorAll('video').length).toBe(2);
  });

  it('debe mostrar las tres preguntas de la bitacora de aprendizaje', async () => {
    const compilado = await render();
    const texto = compilado.textContent ?? '';

    expect(texto).toContain('¿Qué hice?');
    expect(texto).toContain('¿Qué aprendí sobre el Humanismo Amigoniano?');
    expect(texto).toContain('¿Qué cambiaría si repitiera la experiencia?');
  });

  it('no debe mostrar contenido artificial de relleno', async () => {
    const texto = (await render()).textContent ?? '';

    for (const prohibido of [
      'Marcador de posición',
      'Por completar',
      'Video pendiente',
      'Momento 0',
      'Fragmentos en video',
      'Evidencias del trabajo realizado',
    ]) {
      expect(texto).not.toContain(prohibido);
    }
  });

  it('no debe reservar espacio para un producto que no existe', async () => {
    const compilado = await render();
    const texto = compilado.textContent ?? '';

    expect(RESULTADO.producto).toBeNull();
    expect(texto).not.toContain('Producto elaborado');
  });
});
