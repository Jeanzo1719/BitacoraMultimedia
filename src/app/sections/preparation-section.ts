import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { ContenidoPreparacion } from '../core/modelos';
import { MediaFigureComponent } from '../shared/media-figure';
import { RevealDirective } from '../shared/reveal.directive';
import { SectionHeadingComponent } from '../shared/section-heading';

/** Línea de tiempo breve: preparación, materiales, llegada e inicio del encuentro. */
@Component({
  selector: 'app-preparation-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MediaFigureComponent, RevealDirective, SectionHeadingComponent],
  template: `
    <section
      [id]="contenido().id"
      class="scroll-mt-20 py-16 sm:py-20 lg:py-24"
      aria-labelledby="titulo-preparacion"
    >
      <div class="mx-auto max-w-6xl px-5 sm:px-8">
        <app-section-heading
          [antetitulo]="contenido().eyebrow"
          [titulo]="contenido().titulo"
          [intro]="contenido().intro"
          idTitulo="titulo-preparacion"
        />

        <ol class="mt-14 border-l border-line pl-6 sm:pl-10">
          @for (momento of contenido().momentos; track momento.etiqueta; let indice = $index) {
            <li class="relative pb-12 last:pb-0" appReveal [appRevealDelay]="indice * 60">
              <span
                class="absolute top-1.5 -left-[1.6875rem] h-2.5 w-2.5 rounded-full border border-clay bg-paper sm:-left-[2.6875rem]"
                aria-hidden="true"
              ></span>

              <div class="grid gap-7 md:grid-cols-[1fr_0.85fr] md:items-start md:gap-10">
                <div>
                  <p class="font-mono text-xs tracking-[0.16em] text-clay uppercase">
                    {{ momento.etiqueta }}
                  </p>
                  <h3 class="mt-2 font-display text-2xl text-ink">{{ momento.titulo }}</h3>
                  <p class="mt-3 max-w-xl leading-relaxed text-ink-soft">
                    {{ momento.descripcion }}
                  </p>

                  @if (indice === 1) {
                    <ul class="mt-6 flex flex-wrap gap-2.5">
                      @for (material of contenido().materiales; track material) {
                        <li
                          class="rounded-[2px] border border-line bg-surface px-3 py-1.5 text-xs text-ink-soft"
                        >
                          {{ material }}
                        </li>
                      }
                    </ul>
                  }
                </div>

                @if (momento.imagen; as imagen) {
                  <app-media-figure [imagen]="imagen" />
                }
              </div>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
})
export class PreparationSectionComponent {
  readonly contenido = input.required<ContenidoPreparacion>();
}
