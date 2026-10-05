import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { ContenidoFooter } from '../core/modelos';

/** Cierre de la bitácora: firma y vuelta al inicio. */
@Component({
  selector: 'app-site-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="border-t border-line bg-paper-deep">
      <div class="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <dl class="grid gap-5 sm:grid-cols-3">
          @for (firma of contenido().firma; track firma.label) {
            <div>
              <dt class="text-[0.6875rem] tracking-[0.18em] text-clay uppercase">
                {{ firma.label }}
              </dt>
              <dd class="mt-1 text-sm text-ink">{{ firma.valor }}</dd>
            </div>
          }
        </dl>

        <div
          class="mt-12 flex flex-col gap-4 border-t border-line-strong/70 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p class="font-mono text-xs text-ink-mute">
            Bitácora multimedia · Humanización / Humanismo Amigoniano
          </p>
          <a
            href="#inicio"
            class="inline-flex w-fit items-center gap-2 text-sm text-ink-soft transition-colors hover:text-clay"
          >
            <svg
              class="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              aria-hidden="true"
            >
              <path d="M12 19V5M6 11l6-6 6 6" />
            </svg>
            Volver al inicio
          </a>
        </div>
      </div>
    </footer>
  `,
})
export class SiteFooterComponent {
  readonly contenido = input.required<ContenidoFooter>();
}
