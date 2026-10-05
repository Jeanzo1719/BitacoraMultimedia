import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { ContenidoEscenario } from '../core/modelos';
import { MediaFigureComponent } from '../shared/media-figure';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeadingComponent } from '../shared/section-heading';
import { VideoBlockComponent } from '../shared/video-block';

/** El escenario: lugar, contexto breve, fotografía y video de introducción. */
@Component({
  selector: 'app-scenario-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MediaFigureComponent, RevealDirective, SectionHeadingComponent, VideoBlockComponent],
  template: `
    <section
      [id]="contenido().id"
      class="scroll-mt-20 bg-surface py-16 sm:py-20 lg:py-24"
      aria-labelledby="titulo-escenario"
    >
      <div class="mx-auto max-w-6xl px-5 sm:px-8">
        <app-section-heading
          [antetitulo]="contenido().eyebrow"
          [titulo]="contenido().titulo"
          [intro]="contenido().intro"
          idTitulo="titulo-escenario"
        />

        <div class="mt-12 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div appReveal>
            <app-media-figure [imagen]="contenido().imagen" />

            <dl class="mt-10 grid gap-6 sm:grid-cols-2">
              @for (dato of contenido().datos; track dato.label) {
                <div class="border-t border-line pt-4">
                  <dt class="text-[0.6875rem] tracking-[0.18em] text-clay uppercase">
                    {{ dato.label }}
                  </dt>
                  <dd class="mt-1.5 text-[0.9375rem] leading-relaxed text-ink">{{ dato.valor }}</dd>
                </div>
              }
            </dl>
          </div>

          <div class="lg:pt-6" appReveal [appRevealDelay]="120">
            <h3 class="font-display text-xl text-ink">Una breve introducción</h3>
            <div class="mt-5">
              <app-video-block [video]="contenido().video" />
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ScenarioSectionComponent {
  readonly contenido = input.required<ContenidoEscenario>();
}
