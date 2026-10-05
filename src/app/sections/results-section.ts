import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { ContenidoResultados } from '../core/modelos';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeadingComponent } from '../shared/section-heading';

/**
 * Resultados observables. La sección queda preparada con los campos que se
 * deben completar; ninguno se da por registrado hasta que exista la
 * observación real (basta con escribirla y poner `registrado: true`).
 */
@Component({
  selector: 'app-results-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, SectionHeadingComponent],
  template: `
    <section
      [id]="contenido().id"
      class="scroll-mt-20 bg-surface py-16 sm:py-20 lg:py-24"
      aria-labelledby="titulo-resultados"
    >
      <div class="mx-auto max-w-6xl px-5 sm:px-8">
        <app-section-heading
          [antetitulo]="contenido().eyebrow"
          [titulo]="contenido().titulo"
          [intro]="contenido().intro"
          idTitulo="titulo-resultados"
        />

        <ul class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          @for (item of contenido().items; track item.titulo; let indice = $index) {
            <li
              class="flex flex-col rounded-[2px] border border-line bg-paper p-6"
              [class.border-clay-soft]="item.registrado"
              appReveal
              [appRevealDelay]="(indice % 3) * 70"
            >
              <div class="flex items-start justify-between gap-3">
                <h3 class="font-display text-lg leading-snug text-ink">{{ item.titulo }}</h3>
                <span
                  class="shrink-0 rounded-[2px] px-2 py-1 text-[0.625rem] tracking-[0.12em] uppercase"
                  [class]="item.registrado ? 'bg-sage/12 text-sage' : 'bg-line text-ink-soft'"
                >
                  {{ item.registrado ? 'Registrado' : 'Por completar' }}
                </span>
              </div>

              <p class="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {{ item.observacion }}
              </p>
            </li>
          }
        </ul>

        <p
          class="mt-10 border-l-2 border-clay-soft pl-4 text-sm leading-relaxed text-ink-mute"
          appReveal
        >
          {{ contenido().nota }}
        </p>
      </div>
    </section>
  `,
})
export class ResultsSectionComponent {
  readonly contenido = input.required<ContenidoResultados>();
}
