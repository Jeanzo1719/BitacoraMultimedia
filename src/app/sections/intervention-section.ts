import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { ContenidoIntervencion } from '../core/modelos';
import { MediaFigureComponent } from '../shared/media-figure';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeadingComponent } from '../shared/section-heading';
import { VideoBlockComponent } from '../shared/video-block';

/**
 * La intervención: descripción breve del encuentro con la evidencia real
 * disponible, la fotografía y el video del trabajo.
 */
@Component({
  selector: 'app-intervention-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MediaFigureComponent, RevealDirective, SectionHeadingComponent, VideoBlockComponent],
  template: `
    <section
      [id]="contenido().id"
      class="scroll-mt-20 py-16 sm:py-20 lg:py-24"
      aria-labelledby="titulo-intervencion"
    >
      <div class="mx-auto max-w-6xl px-5 sm:px-8">
        <app-section-heading
          [antetitulo]="contenido().eyebrow"
          [titulo]="contenido().titulo"
          [intro]="contenido().intro"
          idTitulo="titulo-intervencion"
        />

        <div class="mt-12 grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-start lg:gap-14">
          <div appReveal>
            <app-video-block [video]="contenido().video" />
          </div>

          <div class="lg:pt-2" appReveal [appRevealDelay]="120">
            <app-media-figure [imagen]="contenido().imagen" />
          </div>
        </div>
      </div>
    </section>
  `,
})
export class InterventionSectionComponent {
  readonly contenido = input.required<ContenidoIntervencion>();
}
