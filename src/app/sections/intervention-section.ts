import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { ContenidoIntervencion } from '../core/modelos';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeadingComponent } from '../shared/section-heading';
import { VideoBlockComponent } from '../shared/video-block';

/**
 * La intervención: descripción breve del encuentro y el video del trabajo.
 * La fotografía aparece solo en la portada, para no repetirla.
 */
@Component({
  selector: 'app-intervention-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, SectionHeadingComponent, VideoBlockComponent],
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

        <div class="mt-12 max-w-2xl" appReveal>
          <app-video-block [video]="contenido().video" />
        </div>
      </div>
    </section>
  `,
})
export class InterventionSectionComponent {
  readonly contenido = input.required<ContenidoIntervencion>();
}
