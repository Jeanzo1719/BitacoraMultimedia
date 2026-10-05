import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  APRENDIZAJE,
  ESCENARIO,
  FOOTER,
  HERO,
  INTERVENCION,
  NAVEGACION,
  RESULTADO,
} from './core/bitacora-content';
import { HeroSectionComponent } from './sections/hero-section';
import { InterventionSectionComponent } from './sections/intervention-section';
import { LearningLogSectionComponent } from './sections/learning-log-section';
import { ResultSectionComponent } from './sections/result-section';
import { ScenarioSectionComponent } from './sections/scenario-section';
import { SiteFooterComponent } from './shared/site-footer';
import { SiteNavComponent } from './shared/site-nav';

/**
 * Página única de la bitácora multimedia, recorrida en orden cronológico:
 * portada, escenario y preparación, intervención, resultado y bitácora de
 * aprendizaje.
 */
@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroSectionComponent,
    InterventionSectionComponent,
    LearningLogSectionComponent,
    ResultSectionComponent,
    ScenarioSectionComponent,
    SiteFooterComponent,
    SiteNavComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly navegacion = NAVEGACION;
  protected readonly hero = HERO;
  protected readonly escenario = ESCENARIO;
  protected readonly intervencion = INTERVENCION;
  protected readonly resultado = RESULTADO;
  protected readonly aprendizaje = APRENDIZAJE;
  protected readonly footer = FOOTER;
}
