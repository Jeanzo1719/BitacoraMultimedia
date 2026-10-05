import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { ContenidoHero } from '../core/modelos';
import { MediaFigureComponent } from '../shared/media-figure';
import { RevealDirective } from '../shared/reveal.directive';

/** Portada: título, propósito del registro y la fotografía principal. */
@Component({
  selector: 'app-hero-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MediaFigureComponent, RevealDirective],
  template: `
    <section
      [id]="contenido().id"
      class="paper-grain scroll-mt-20 border-b border-line"
      aria-labelledby="titulo-portada"
    >
      <div class="mx-auto max-w-6xl px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-20 lg:pt-24">
        <div class="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div appReveal>
            <p
              class="mb-6 flex items-center gap-3 text-[0.6875rem] font-medium tracking-[0.24em] text-clay uppercase"
            >
              <span class="h-px w-10 bg-clay-soft" aria-hidden="true"></span>
              {{ contenido().eyebrow }}
            </p>

            <h1
              id="titulo-portada"
              class="font-display text-[2.5rem] leading-[1.05] text-ink sm:text-6xl"
            >
              {{ contenido().titulo }}
            </h1>

            <p class="mt-6 font-display text-xl leading-snug text-ink-soft italic sm:text-2xl">
              {{ contenido().subtitulo }}
            </p>

            <p class="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
              {{ contenido().descripcion }}
            </p>

            <p
              class="mt-5 max-w-xl border-l-2 border-clay-soft pl-4 text-sm leading-relaxed text-ink-mute"
            >
              {{ contenido().responsable }}
            </p>

            <dl class="mt-9 flex flex-wrap gap-x-10 gap-y-5">
              @for (dato of contenido().datos; track dato.label) {
                <div>
                  <dt class="text-[0.6875rem] tracking-[0.18em] text-clay uppercase">
                    {{ dato.label }}
                  </dt>
                  <dd class="mt-1 text-sm text-ink">{{ dato.valor }}</dd>
                </div>
              }
            </dl>
          </div>

          <div appReveal [appRevealDelay]="120">
            <app-media-figure [imagen]="contenido().imagen" [perezosa]="false" />
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroSectionComponent {
  readonly contenido = input.required<ContenidoHero>();
}
