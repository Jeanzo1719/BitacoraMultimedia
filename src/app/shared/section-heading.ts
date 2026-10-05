import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Encabezado de sección compartido: antetítulo corto, título y, si hace
 * falta, un párrafo de entrada. Mantiene la jerarquía de encabezados de la
 * página (un solo `h1`, un `h2` por sección) y admite un tono claro o
 * inverso para las secciones destacadas.
 */
@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-2xl">
      @if (antetitulo()) {
        <p
          class="mb-4 flex items-center gap-3 text-[0.6875rem] font-medium tracking-[0.22em] uppercase"
          [class]="tono() === 'inverso' ? 'text-clay-soft' : 'text-clay'"
        >
          <span
            class="h-px w-8"
            [class]="tono() === 'inverso' ? 'bg-clay-soft/70' : 'bg-clay-soft'"
            aria-hidden="true"
          ></span>
          {{ antetitulo() }}
        </p>
      }
      <h2
        [id]="idTitulo()"
        class="font-display text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem]"
        [class]="tono() === 'inverso' ? 'text-paper' : 'text-ink'"
      >
        {{ titulo() }}
      </h2>
      @if (intro()) {
        <p
          class="mt-5 text-base leading-relaxed sm:text-[1.0625rem]"
          [class]="tono() === 'inverso' ? 'text-paper/75' : 'text-ink-soft'"
        >
          {{ intro() }}
        </p>
      }
    </div>
  `,
})
export class SectionHeadingComponent {
  readonly antetitulo = input('');
  readonly titulo = input.required<string>();
  readonly intro = input('');
  readonly idTitulo = input.required<string>();
  /** `claro` para fondos de papel; `inverso` para la sección destacada. */
  readonly tono = input<'claro' | 'inverso'>('claro');
}
