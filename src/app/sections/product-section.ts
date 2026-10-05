import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { ContenidoProducto } from '../core/modelos';
import { MediaFigureComponent } from '../shared/media-figure';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeadingComponent } from '../shared/section-heading';

/** Producto elaborado: fotografía y explicación breve de qué, cómo y para qué. */
@Component({
  selector: 'app-product-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MediaFigureComponent, RevealDirective, SectionHeadingComponent],
  template: `
    <section
      [id]="contenido().id"
      class="paper-grain scroll-mt-20 border-y border-line py-16 sm:py-20 lg:py-24"
      aria-labelledby="titulo-producto"
    >
      <div class="mx-auto max-w-6xl px-5 sm:px-8">
        <app-section-heading
          [antetitulo]="contenido().eyebrow"
          [titulo]="contenido().titulo"
          [intro]="contenido().intro"
          idTitulo="titulo-producto"
        />

        <div class="mt-14 grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div appReveal>
            <app-media-figure [imagen]="contenido().imagen" />
          </div>

          <div class="space-y-9" appReveal [appRevealDelay]="120">
            @for (bloque of contenido().bloques; track bloque.titulo; let indice = $index) {
              <div class="border-t border-line pt-5">
                <p class="font-mono text-xs tracking-[0.16em] text-clay uppercase">
                  {{ (indice + 1).toString().padStart(2, '0') }} · {{ bloque.titulo }}
                </p>
                <p class="mt-3 leading-relaxed text-ink-soft">{{ bloque.texto }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ProductSectionComponent {
  readonly contenido = input.required<ContenidoProducto>();
}
