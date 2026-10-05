import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import type { ImagenBitacora, MediaRatio } from '../core/modelos';

/** Clases de proporción escritas completas para que Tailwind las detecte. */
const RATIOS: Record<MediaRatio, string> = {
  '16/9': 'aspect-[16/9]',
  '3/2': 'aspect-[3/2]',
  '4/3': 'aspect-[4/3]',
  '4/5': 'aspect-[4/5]',
  '1/1': 'aspect-square',
};

/**
 * Fotografía con marco de proporción fija, pie de foto y distintivo
 * automático de marcador de posición: toda imagen `.svg` se etiqueta como
 * «Marcador de posición», de modo que se vea con claridad qué archivo falta
 * por sustituir.
 */
@Component({
  selector: 'app-media-figure',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <figure class="group">
      <div
        class="relative overflow-hidden rounded-[2px] border border-line bg-paper-deep"
        [class]="marco()"
      >
        @if (fallo()) {
          <div
            role="img"
            [attr.aria-label]="imagen().alt"
            class="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center"
          >
            <svg
              class="h-8 w-8 text-clay-soft"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.25"
              aria-hidden="true"
            >
              <path
                d="M3 8.5A2.5 2.5 0 0 1 5.5 6h1.7l1-1.6h7.6l1 1.6h1.7A2.5 2.5 0 0 1 21 8.5v8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5z"
              />
              <circle cx="12" cy="12.5" r="3.25" />
            </svg>
            <p class="font-display text-base text-ink-soft">Archivo no encontrado</p>
            <p class="text-xs break-all text-ink-mute">{{ imagen().src }}</p>
          </div>
        } @else {
          <img
            [src]="imagen().src"
            [alt]="imagen().alt"
            decoding="async"
            [attr.loading]="perezosa() ? 'lazy' : 'eager'"
            [attr.fetchpriority]="perezosa() ? null : 'high'"
            class="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.02]"
            (error)="fallo.set(true)"
          />
        }

        @if (esMarcador()) {
          <span
            class="absolute top-3 left-3 rounded-[2px] bg-ink/80 px-2 py-1 text-[0.625rem] tracking-[0.14em] text-paper uppercase"
          >
            Marcador de posición
          </span>
        }
      </div>

      @if (imagen().caption) {
        <figcaption class="mt-3 flex items-start gap-2.5 text-sm leading-relaxed text-ink-mute">
          <span class="mt-[0.55rem] h-px w-4 shrink-0 bg-clay-soft" aria-hidden="true"></span>
          <span>{{ imagen().caption }}</span>
        </figcaption>
      }
    </figure>
  `,
})
export class MediaFigureComponent {
  readonly imagen = input.required<ImagenBitacora>();

  /** Las imágenes bajo el primer pliegue pueden cargarse de inmediato. */
  readonly perezosa = input(true);

  protected readonly fallo = signal(false);
  protected readonly esMarcador = computed(() => this.imagen().src.endsWith('.svg'));
  protected readonly marco = computed(() => RATIOS[this.imagen().ratio]);
}
