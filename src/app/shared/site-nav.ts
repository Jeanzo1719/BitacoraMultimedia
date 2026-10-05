import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  afterNextRender,
  input,
  signal,
  viewChild,
} from '@angular/core';
import type { NavLink } from '../core/modelos';

const MENU_ID = 'navegacion-principal';

/**
 * Navegación superior fija: enlaces en línea en escritorio y un menú
 * desplegable en pantallas pequeñas. Marca la sección visible y devuelve
 * el foco al botón del menú cuando se cierra con la tecla Escape.
 */
@Component({
  selector: 'app-site-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header
      class="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-sm"
      (keydown.escape)="cerrarMenuConFoco()"
    >
      <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a
          href="#inicio"
          class="font-display text-base leading-tight transition-colors hover:text-clay sm:text-lg"
          [class]="activo() === 'inicio' ? 'text-clay' : 'text-ink'"
          (click)="cerrarMenu()"
        >
          Un espacio<span class="hidden sm:inline"> para compartir</span>
        </a>

        <nav aria-label="Secciones de la bitácora" class="hidden lg:block">
          <ul class="flex items-center gap-7">
            @for (enlace of enlaces(); track enlace.id) {
              <li>
                <a
                  [href]="'#' + enlace.id"
                  [attr.aria-current]="activo() === enlace.id ? 'true' : null"
                  class="py-1 text-sm tracking-wide transition-colors hover:text-clay"
                  [class]="colorEnlace(activo() === enlace.id)"
                >
                  {{ enlace.label }}
                </a>
              </li>
            }
          </ul>
        </nav>

        <button
          #botonMenu
          type="button"
          class="flex items-center gap-2 rounded-[2px] border border-line-strong px-3 py-2 text-sm transition-colors hover:border-clay hover:text-clay lg:hidden"
          [class]="colorEnlace(false)"
          [attr.aria-expanded]="menuAbierto()"
          [attr.aria-controls]="MENU_ID"
          (click)="alternarMenu()"
        >
          <svg
            class="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            aria-hidden="true"
          >
            @if (menuAbierto()) {
              <path d="M6 6l12 12M18 6L6 18" />
            } @else {
              <path d="M4 7h16M4 12h16M4 17h16" />
            }
          </svg>
          <span>{{ menuAbierto() ? 'Cerrar' : 'Menú' }}</span>
        </button>
      </div>

      @if (menuAbierto()) {
        <nav
          [id]="MENU_ID"
          aria-label="Secciones de la bitácora"
          class="border-t border-line bg-surface lg:hidden"
        >
          <ul class="mx-auto flex max-w-6xl flex-col px-5 py-1 sm:px-8">
            @for (enlace of enlaces(); track enlace.id) {
              <li class="border-b border-line/70 last:border-b-0">
                <a
                  [href]="'#' + enlace.id"
                  [attr.aria-current]="activo() === enlace.id ? 'true' : null"
                  class="flex items-center justify-between py-3 text-sm"
                  [class]="colorEnlace(activo() === enlace.id)"
                  (click)="cerrarMenu()"
                >
                  {{ enlace.label }}
                  <span class="font-mono text-xs text-clay-soft" aria-hidden="true">
                    {{ indiceDe(enlace.id) }}
                  </span>
                </a>
              </li>
            }
          </ul>
        </nav>
      }
    </header>
  `,
})
export class SiteNavComponent implements OnDestroy {
  readonly enlaces = input.required<readonly NavLink[]>();

  protected readonly MENU_ID = MENU_ID;
  protected readonly menuAbierto = signal(false);
  protected readonly activo = signal<string>('inicio');

  private readonly botonMenu = viewChild<ElementRef<HTMLButtonElement>>('botonMenu');
  private observador: IntersectionObserver | null = null;

  constructor() {
    afterNextRender(() => this.observarSecciones());
  }

  protected colorEnlace(activo: boolean): string {
    return activo ? 'text-clay' : 'text-ink-soft';
  }

  protected indiceDe(id: string): string {
    return String(this.enlaces().findIndex((enlace) => enlace.id === id) + 1).padStart(2, '0');
  }

  protected alternarMenu(): void {
    this.menuAbierto.update((abierto) => !abierto);
  }

  protected cerrarMenu(): void {
    this.menuAbierto.set(false);
  }

  /** Cierra el menú y devuelve el foco al botón que lo controla. */
  protected cerrarMenuConFoco(): void {
    if (!this.menuAbierto()) {
      return;
    }
    this.cerrarMenu();
    this.botonMenu()?.nativeElement.focus();
  }

  private observarSecciones(): void {
    const secciones = this.enlaces()
      .map((enlace) => document.getElementById(enlace.id))
      .filter((seccion): seccion is HTMLElement => seccion !== null);

    if (typeof IntersectionObserver === 'undefined' || secciones.length === 0) {
      return;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            this.activo.set(entrada.target.id);
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    for (const seccion of secciones) {
      observador.observe(seccion);
    }

    this.observador = observador;
  }

  ngOnDestroy(): void {
    this.observador?.disconnect();
  }
}
