import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { ContenidoAprendizaje } from '../core/modelos';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeadingComponent } from '../shared/section-heading';
import { VideoBlockComponent } from '../shared/video-block';

/**
 * Cierre destacado: el video de la Bitácora de Aprendizaje, enmarcado por
 * las tres preguntas que responde. Las preguntas funcionan como contexto
 * visual; las respuestas se conservan en el video.
 */
@Component({
  selector: 'app-learning-log-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, SectionHeadingComponent, VideoBlockComponent],
  template: `
    <section
      [id]="contenido().id"
      class="paper-grain scroll-mt-20 bg-ink py-16 sm:py-20 lg:py-24"
      aria-labelledby="titulo-aprendizaje"
    >
      <div class="mx-auto max-w-6xl px-5 sm:px-8">
        <app-section-heading
          [antetitulo]="contenido().eyebrow"
          [titulo]="contenido().titulo"
          [intro]="contenido().intro"
          idTitulo="titulo-aprendizaje"
          tono="inverso"
        />

        <div class="mt-14 grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-start lg:gap-14">
          <div class="lg:order-1" appReveal>
            <app-video-block [video]="contenido().video" tono="inverso" />
            <p class="mt-5 max-w-2xl text-sm leading-relaxed text-paper/70">
              {{ contenido().nota }}
            </p>
          </div>

          <div class="lg:order-2" appReveal [appRevealDelay]="120">
            <p class="text-[0.6875rem] tracking-[0.2em] text-clay-soft uppercase">
              Preguntas que responde el video
            </p>

            <ol class="mt-6 space-y-4">
              @for (pregunta of contenido().preguntas; track pregunta; let indice = $index) {
                <li
                  class="rounded-[2px] border border-paper/15 bg-paper/5 px-5 py-4 backdrop-blur-[1px]"
                >
                  <span class="flex items-start gap-4">
                    <span class="mt-0.5 font-mono text-xs text-clay-soft" aria-hidden="true">
                      {{ (indice + 1).toString().padStart(2, '0') }}
                    </span>
                    <span class="font-display text-lg leading-snug text-paper sm:text-xl">
                      {{ pregunta }}
                    </span>
                  </span>
                </li>
              }
            </ol>

            <p class="mt-6 flex items-start gap-3 text-xs leading-relaxed text-paper/55">
              <span class="mt-1.5 h-px w-5 shrink-0 bg-clay-soft/70" aria-hidden="true"></span>
              <span>
                El video responde únicamente estas tres preguntas. No se agregan preguntas
                adicionales.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class LearningLogSectionComponent {
  readonly contenido = input.required<ContenidoAprendizaje>();
}
