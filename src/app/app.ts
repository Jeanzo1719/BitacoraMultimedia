import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  APRENDIZAJE,
  ESCENARIO,
  FOOTER,
  HERO,
  INTERVENCION,
  NAVEGACION,
  PREPARACION,
  PRODUCTO,
  RESULTADOS,
} from './core/bitacora-content';
import { HeroSectionComponent } from './sections/hero-section';
import { InterventionSectionComponent } from './sections/intervention-section';
import { LearningLogSectionComponent } from './sections/learning-log-section';
import { PreparationSectionComponent } from './sections/preparation-section';
import { ProductSectionComponent } from './sections/product-section';
import { ResultsSectionComponent } from './sections/results-section';
import { ScenarioSectionComponent } from './sections/scenario-section';
import { SiteFooterComponent } from './shared/site-footer';
import { SiteNavComponent } from './shared/site-nav';

/**
 * Página única de la bitácora multimedia. El recorrido es cronológico:
 * portada, escenario, preparación, intervención, producto, resultados y
 * bitácora de aprendizaje.
 */
@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroSectionComponent,
    InterventionSectionComponent,
    LearningLogSectionComponent,
    PreparationSectionComponent,
    ProductSectionComponent,
    ResultsSectionComponent,
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
  protected readonly preparacion = PREPARACION;
  protected readonly intervencion = INTERVENCION;
  protected readonly producto = PRODUCTO;
  protected readonly resultados = RESULTADOS;
  protected readonly aprendizaje = APRENDIZAJE;
  protected readonly footer = FOOTER;
}
