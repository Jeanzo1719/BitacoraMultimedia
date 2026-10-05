import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { VideoBitacora } from '../core/modelos';

/**
 * Video corto con controles nativos, proporción fija y pie de foto.
 *
 * No muestra estados especiales: si el archivo no está, el navegador
 * presenta su propio reproductor vacío. El póster solo se usa cuando se
 * dispone de una imagen real (`poster` en el contenido).
 */
@Component({
  selector: 'app-video-block',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <figure class="flex h-full flex-col">
      <div
        class="overflow-hidden rounded-[2px] border bg-ink"
        [class]="tono() === 'inverso' ? 'border-paper/20' : 'border-line'"
      >
        <video
          class="aspect-video w-full bg-ink object-cover"
          controls
          playsinline
          preload="metadata"
          [attr.poster]="video().poster ?? null"
          [src]="video().src"
          [attr.aria-label]="video().titulo"
        ></video>
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
      </figcaption>
    </figure>
  `,
})
export class VideoBlockComponent {
  readonly video = input.required<VideoBitacora>();
  /** `claro` para fondos de papel; `inverso` para la sección de cierre. */
  readonly tono = input<'claro' | 'inverso'>('claro');
}
