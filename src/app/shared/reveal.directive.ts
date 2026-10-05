import {
  afterNextRender,
  Directive,
  ElementRef,
  inject,
  input,
  numberAttribute,
} from '@angular/core';

/**
 * Aparición progresiva al entrar en pantalla.
 *
 * El estado inicial (opacidad 0) lo aplica la propia directiva en el
 * navegador, nunca una clase global del CSS: así, si el JavaScript no se
 * ejecuta, el contenido sigue siendo visible. Con `prefers-reduced-motion`
 * la animación se omite por completo.
 */
@Directive({
  selector: '[appReveal]',
})
export class RevealDirective {
  /** Retardo de la animación, en milisegundos. */
  readonly appRevealDelay = input(0, { transform: numberAttribute });

  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer: IntersectionObserver | null = null;

  constructor() {
    afterNextRender(() => this.init());
  }

  private init(): void {
    const nodo = this.element.nativeElement;
    const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducido || typeof IntersectionObserver === 'undefined') {
      return;
    }

    nodo.style.opacity = '0';
    nodo.style.transform = 'translateY(18px)';
    nodo.style.transition = 'opacity 700ms ease, transform 700ms ease';
    if (this.appRevealDelay() > 0) {
      nodo.style.transitionDelay = `${this.appRevealDelay()}ms`;
    }

    this.observer = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (!entrada.isIntersecting) {
            continue;
          }
          nodo.style.opacity = '1';
          nodo.style.transform = 'none';
          this.observer?.disconnect();
          this.observer = null;
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );

    this.observer.observe(nodo);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }
}
