import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import type { VideoBitacora } from '../core/modelos';

/**
 * Video corto con póster, controles nativos y manejo del archivo ausente.
 *
 * Mientras el `.mp4` no esté incorporado, el bloque muestra un aviso claro
 * con el nombre exacto del archivo esperado y recuerda la necesidad de
 * añadir la transcripción o los subtítulos correspondientes.
 */
@Component({
  selector: 'app-video-block',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <figure class="flex h-full flex-col">
      <div
        class="relative overflow-hidden rounded-[2px] border bg-ink"
        [class]="tono() === 'inverso' ? 'border-paper/20' : 'border-line'"
      >
        @if (fallo()) {
          <div
            class="flex aspect-video w-full flex-col items-center justify-center gap-3 p-6 text-center"
          >
            <svg
              class="h-9 w-9 text-clay-soft"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.25"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2.5" />
              <path d="M10.5 9.2v5.6l4.6-2.8z" />
            </svg>
            <p class="font-display text-lg text-paper">Video pendiente de incorporar</p>
            <p class="text-sm text-paper/70">
              Archivo esperado: <span class="font-mono text-xs">{{ video().archivo }}</span>
            </p>
          </div>
        } @else {
          <video
            class="aspect-video w-full bg-ink object-cover"
            controls
            preload="metadata"
            playsinline
            [poster]="video().poster"
            [src]="video().src"
            [attr.aria-label]="video().titulo"
            (error)="fallo.set(true)"
          ></video>
        }
      </div>

      <figcaption class="mt-3 flex flex-1 flex-col gap-1">
        <span
          class="font-display text-lg"
          [class]="tono() === 'inverso' ? 'text-paper' : 'text-ink'"
        >
          {{ video().titulo }}
        </span>
        <span
          class="text-sm leading-relaxed"
          [class]="tono() === 'inverso' ? 'text-paper/70' : 'text-ink-mute'"
        >
          {{ video().descripcion }}
        </span>
        <span
          class="mt-1 text-xs leading-relaxed"
          [class]="tono() === 'inverso' ? 'text-paper/55' : 'text-ink-mute'"
        >
          Archivo: <span class="font-mono">{{ video().archivo }}</span> ·
          <span class="italic">añadir transcripción o archivo .vtt para los subtítulos.</span>
        </span>
      </figcaption>
    </figure>
  `,
})
export class VideoBlockComponent {
  readonly video = input.required<VideoBitacora>();
  /** `claro` para fondos de papel; `inverso` para la sección de cierre. */
  readonly tono = input<'claro' | 'inverso'>('claro');

  protected readonly fallo = signal(false);
}
