import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { ContenidoEscenario } from '../core/modelos';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeadingComponent } from '../shared/section-heading';

/**
 * Escenario y preparación en un solo bloque breve: lugar, contexto,
 * organización de la actividad y materiales utilizados.
 */
@Component({
  selector: 'app-scenario-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, SectionHeadingComponent],
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

        <dl class="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-10">
          @for (bloque of contenido().bloques; track bloque.titulo; let indice = $index) {
            <div class="border-t border-line pt-5" appReveal [appRevealDelay]="indice * 70">
              <dt class="font-mono text-xs tracking-[0.16em] text-clay uppercase">
                {{ (indice + 1).toString().padStart(2, '0') }} · {{ bloque.titulo }}
              </dt>
              <dd class="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                {{ bloque.texto }}
              </dd>
            </div>
          }
        </dl>
      </div>
    </section>
  `,
})
export class ScenarioSectionComponent {
  readonly contenido = input.required<ContenidoEscenario>();
}
