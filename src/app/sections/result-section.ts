import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { ContenidoResultado } from '../core/modelos';
import { MediaFigureComponent } from '../shared/media-figure';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeadingComponent } from '../shared/section-heading';

/**
 * Resultado de la experiencia: las observaciones reales del encuentro.
 *
 * El producto tangible es opcional. Si `producto` es `null` —lo normal en una
 * experiencia de acompañamiento y escucha— la sección no reserva ningún
 * espacio para él; si lo hubo, se muestra junto a las observaciones.
 */
@Component({
  selector: 'app-result-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MediaFigureComponent, RevealDirective, SectionHeadingComponent],
  template: `
    <section
      [id]="contenido().id"
      class="paper-grain scroll-mt-20 border-y border-line py-16 sm:py-20 lg:py-24"
      aria-labelledby="titulo-resultado"
    >
      <div class="mx-auto max-w-6xl px-5 sm:px-8">
        <app-section-heading
          [antetitulo]="contenido().eyebrow"
          [titulo]="contenido().titulo"
          [intro]="contenido().intro"
          idTitulo="titulo-resultado"
        />

        <div class="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-10">
          @for (bloque of contenido().bloques; track bloque.titulo; let indice = $index) {
            <div class="border-t border-line pt-5" appReveal [appRevealDelay]="indice * 70">
              <p class="font-mono text-xs tracking-[0.16em] text-clay uppercase">
                {{ bloque.titulo }}
              </p>
              <p class="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">{{ bloque.texto }}</p>
            </div>
          }
        </div>

        @if (contenido().producto; as producto) {
          <div class="mt-14 border-t border-line pt-10" appReveal>
            <p class="font-mono text-xs tracking-[0.16em] text-clay uppercase">
              Producto elaborado
            </p>
            <h3 class="mt-2 font-display text-2xl text-ink">{{ producto.titulo }}</h3>
            <div class="mt-6 grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
              <p class="leading-relaxed text-ink-soft">{{ producto.descripcion }}</p>
              @if (producto.imagen; as imagen) {
                <app-media-figure [imagen]="imagen" />
              }
            </div>
          </div>
        }
      </div>
    </section>
  `,
})
export class ResultSectionComponent {
  readonly contenido = input.required<ContenidoResultado>();
}
