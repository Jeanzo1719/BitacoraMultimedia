import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { ContenidoIntervencion } from '../core/modelos';
import { MediaFigureComponent } from '../shared/media-figure';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeadingComponent } from '../shared/section-heading';
import { VideoBlockComponent } from '../shared/video-block';

/**
 * Sección principal: recorrido visual del encuentro con fotografías
 * originales, videos cortos y evidencias del trabajo realizado.
 */
@Component({
  selector: 'app-intervention-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MediaFigureComponent, RevealDirective, SectionHeadingComponent, VideoBlockComponent],
  template: `
    <section
      [id]="contenido().id"
      class="scroll-mt-20 bg-surface py-16 sm:py-20 lg:py-24"
      aria-labelledby="titulo-intervencion"
    >
      <div class="mx-auto max-w-6xl px-5 sm:px-8">
        <app-section-heading
          [antetitulo]="contenido().eyebrow"
          [titulo]="contenido().titulo"
          [intro]="contenido().intro"
          idTitulo="titulo-intervencion"
        />

        <!-- Fotografías originales -->
        <div class="mt-14 columns-2 gap-5 sm:gap-6 lg:columns-3" appReveal>
          @for (imagen of contenido().galeria; track imagen.src) {
            <div class="mb-5 break-inside-avoid sm:mb-6">
              <app-media-figure [imagen]="imagen" />
            </div>
          }
        </div>

        <!-- Videos cortos -->
        <h3 class="mt-16 font-display text-2xl text-ink">Fragmentos en video</h3>
        <div class="mt-6 grid gap-8 sm:grid-cols-2 sm:gap-10">
          @for (video of contenido().videos; track video.src; let indice = $index) {
            <div appReveal [appRevealDelay]="indice * 100">
              <app-video-block [video]="video" />
            </div>
          }
        </div>

        <!-- Evidencias del trabajo realizado -->
        <div class="mt-16 border-t border-line pt-10" appReveal>
          <h3 class="font-display text-2xl text-ink">Evidencias del trabajo realizado</h3>
          <dl class="mt-6 grid gap-6 sm:grid-cols-3 sm:gap-8">
            @for (evidencia of contenido().evidencias; track evidencia.titulo) {
              <div>
                <dt class="flex items-start gap-2 text-[0.9375rem] text-ink">
                  <span class="mt-2 h-px w-4 shrink-0 bg-clay-soft" aria-hidden="true"></span>
                  {{ evidencia.titulo }}
                </dt>
                <dd class="mt-2 pl-6 text-sm leading-relaxed text-ink-mute">
                  {{ evidencia.detalle }}
                </dd>
              </div>
            }
          </dl>
        </div>
      </div>
    </section>
  `,
})
export class InterventionSectionComponent {
  readonly contenido = input.required<ContenidoIntervencion>();
}
