import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { ContenidoAprendizaje } from '../core/modelos';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeadingComponent } from '../shared/section-heading';
import { VideoBlockComponent } from '../shared/video-block';

/**
 * Bitácora de aprendizaje: el video final enmarcado por las tres preguntas
 * que responde. Las preguntas son el contexto del video; las respuestas se
 * conservan en él, no en la página.
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

        <div class="mt-12 grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-start lg:gap-14">
          <div appReveal>
            <app-video-block [video]="contenido().video" tono="inverso" />
          </div>

          <div appReveal [appRevealDelay]="120">
            <p class="text-[0.6875rem] tracking-[0.2em] text-clay-soft uppercase">
              Preguntas que responde el video
            </p>

            <ol class="mt-6 space-y-4">
              @for (pregunta of contenido().preguntas; track pregunta; let indice = $index) {
                <li class="rounded-[2px] border border-paper/15 bg-paper/5 px-5 py-4">
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
          </div>
        </div>
      </div>
    </section>
  `,
})
export class LearningLogSectionComponent {
  readonly contenido = input.required<ContenidoAprendizaje>();
}
