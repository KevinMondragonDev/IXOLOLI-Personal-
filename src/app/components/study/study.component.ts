import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ChecklistComponent } from '../checklist/checklist.component';
import { ProgressService } from '../../services/progress.service';

@Component({
  selector: 'app-study',
  standalone: true,
  imports: [CommonModule, RouterModule, ChecklistComponent],
  template: `
    <div class="min-h-screen bg-gray-950 text-gray-100 font-sans p-4 md:p-8">
      <div class="max-w-4xl mx-auto space-y-8">

        <!-- Header -->
        <header class="flex flex-col md:flex-row md:justify-between md:items-center border-b border-gray-800 pb-6 gap-4">
          <div>
            <h1 class="text-3xl font-bold text-white flex items-center gap-3">
              <svg class="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              Ruta de Estudio
            </h1>
            <p class="text-gray-400 mt-1 text-sm">
              Querétaro · Inicio: 25 jun 2026 · Meta: Data Engineer FAANG-ready
            </p>
          </div>
          <div class="flex items-center gap-3 flex-wrap">
            <!-- Streak -->
            <div *ngIf="fireStreak > 0"
                 class="flex items-center gap-2 bg-gradient-to-r from-orange-900/40 to-red-900/40 border border-orange-500/30 px-4 py-2 rounded-xl text-orange-400 font-semibold shadow-[0_0_15px_rgba(249,115,22,0.15)]">
              <span class="text-lg">🔥</span>
              <span>{{ fireStreak }} días</span>
            </div>
            <!-- Back -->
            <a routerLink="/"
               class="px-4 py-2 bg-gray-900 border border-gray-800 hover:bg-gray-800 rounded-lg text-sm transition-colors text-gray-300 flex items-center gap-2 shrink-0">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              Volver
            </a>
          </div>
        </header>

        <!-- Progress global -->
        <div class="bg-gray-900/60 border border-gray-800 rounded-2xl p-5 space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-400 font-medium">Progreso total</span>
            <span class="text-sm font-bold"
                  [ngClass]="globalPercent >= 100 ? 'text-emerald-400' : 'text-purple-400'">
              {{ completedCount }} / {{ totalCount }} días ({{ globalPercent | number:'1.0-0' }}%)
            </span>
          </div>
          <!-- Barra -->
          <div class="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
            <div class="h-2.5 rounded-full transition-all duration-500"
                 [style.width.%]="globalPercent"
                 [ngClass]="globalPercent >= 100 ? 'bg-emerald-500' : 'bg-gradient-to-r from-purple-600 to-purple-400'">
            </div>
          </div>
          <!-- Tiempo ahorrado -->
          <div *ngIf="savedDays > 0"
               class="flex items-center gap-2 bg-emerald-950/40 border border-emerald-700/30 rounded-xl px-4 py-2.5 mt-1">
            <span class="text-xl">⚡</span>
            <div>
              <p class="text-emerald-400 font-semibold text-sm">
                ¡Vas {{ savedDays }} día{{ savedDays !== 1 ? 's' : '' }} adelante del plan!
              </p>
              <p class="text-emerald-300/70 text-xs">
                A este ritmo terminas tu formación el
                <strong class="text-emerald-300">{{ projectedEndDate }}</strong>
                — {{ savedDays }} día{{ savedDays !== 1 ? 's' : '' }} antes de lo esperado
                ({{ savedWeeks > 0 ? savedWeeks + ' semana' + (savedWeeks !== 1 ? 's' : '') + ' y ' : '' }}{{ remainingSavedDays }} día{{ remainingSavedDays !== 1 ? 's' : '' }} menos)
              </p>
            </div>
          </div>
          <!-- Fecha estimada normal -->
          <div *ngIf="savedDays === 0"
               class="text-xs text-gray-600 flex items-center gap-1">
            <span>📅</span>
            <span>Fecha estimada de finalización: <strong class="text-gray-500">{{ originalEndDate }}</strong></span>
          </div>
        </div>

        <!-- Rutas -->
        <div class="space-y-6" *ngFor="let route of parsedRoutes">

          <!-- Phases / Sections -->
          <div *ngFor="let phase of route.phases; let phaseIdx = index"
               class="bg-gray-900/50 rounded-2xl border overflow-hidden transition-all duration-300"
               [ngClass]="{
                 'border-gray-800': !phase.isActive,
                 'border-purple-700/50 shadow-[0_0_20px_rgba(147,51,234,0.1)]': phase.isActive,
                 'border-emerald-700/30': phase.isCompleted
               }">

            <!-- Phase header (clickable collapse) -->
            <button
              class="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-gray-800/30"
              (click)="togglePhase(route.category, phaseIdx)">
              <div class="flex items-center gap-3 min-w-0">
                <!-- Status icon -->
                <div class="shrink-0">
                  <div *ngIf="phase.isCompleted"
                       class="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
                    <svg class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div *ngIf="phase.isActive && !phase.isCompleted"
                       class="w-7 h-7 rounded-full bg-purple-500/20 border border-purple-500/60 flex items-center justify-center">
                    <div class="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse"></div>
                  </div>
                  <div *ngIf="!phase.isActive && !phase.isCompleted"
                       class="w-7 h-7 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                    <svg class="w-3.5 h-3.5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <!-- Phase name -->
                <div class="min-w-0">
                  <h3 class="font-semibold truncate"
                      [ngClass]="{
                        'text-emerald-400': phase.isCompleted,
                        'text-purple-300': phase.isActive && !phase.isCompleted,
                        'text-gray-600': !phase.isActive && !phase.isCompleted
                      }">
                    {{ phase.name }}
                  </h3>
                  <p class="text-xs mt-0.5"
                     [ngClass]="{
                       'text-emerald-600': phase.isCompleted,
                       'text-gray-500': !phase.isCompleted
                     }">
                    {{ phase.completedItems }}/{{ phase.items.length }} completados
                    <span *ngIf="phase.isCompleted"> · ✅ Completada</span>
                    <span *ngIf="phase.isActive && !phase.isCompleted"> · ▶ En progreso</span>
                    <span *ngIf="!phase.isActive && !phase.isCompleted"> · 🔒 Bloqueada</span>
                  </p>
                </div>
              </div>
              <!-- Phase progress mini bar + chevron -->
              <div class="flex items-center gap-3 shrink-0 ml-4">
                <div class="hidden sm:block w-20 bg-gray-800 rounded-full h-1.5 overflow-hidden">
                  <div class="h-1.5 rounded-full transition-all duration-500"
                       [style.width.%]="phase.items.length > 0 ? (phase.completedItems / phase.items.length) * 100 : 0"
                       [ngClass]="phase.isCompleted ? 'bg-emerald-500' : 'bg-purple-500'">
                  </div>
                </div>
                <svg class="w-5 h-5 text-gray-500 transition-transform duration-200"
                     [class.rotate-180]="expandedPhases[route.category + '_' + phaseIdx]"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </div>
            </button>

            <!-- Phase items (collapsible) -->
            <div *ngIf="expandedPhases[route.category + '_' + phaseIdx]"
                 class="px-5 pb-5 pt-1 border-t border-gray-800/50">
              <app-checklist
                [category]="route.category"
                [items]="phase.items"
                (itemToggled)="onItemToggled()"
                (itemUnlocked)="onItemUnlocked($event, route, phase)">
              </app-checklist>
            </div>
          </div>

        </div>
      </div>
    </div>
  `
})
export class StudyComponent implements OnInit {

  parsedRoutes: any[] = [];
  private rawData: any[] = [];

  fireStreak       = 0;
  completedCount   = 0;
  totalCount       = 0;
  globalPercent    = 0;
  savedDays        = 0;
  savedWeeks       = 0;
  remainingSavedDays = 0;
  projectedEndDate = '';
  originalEndDate  = '';

  expandedPhases: Record<string, boolean> = {};

  // Start date of the plan (Querétaro, 25 jun 2026)
  private readonly PLAN_START = new Date(2026, 5, 25); // month is 0-indexed
  // Weekday hours: 2h  →  1 "planned day unit"
  // Weekend hours: 4h  →  still 1 "planned day unit" (counts as 1 day in calendar)

  constructor(
    private dataService: DataService,
    private progressService: ProgressService
  ) {}

  ngOnInit() {
    this.dataService.getEstudio().subscribe(data => {
      this.rawData = data;
      this.recalculate();
    });
  }

  togglePhase(category: string, phaseIdx: number) {
    const key = `${category}_${phaseIdx}`;
    this.expandedPhases[key] = !this.expandedPhases[key];
  }

  onItemToggled() {
    this.recalculate();
  }

  /** Called when user hold-unlocks a locked item */
  onItemUnlocked(itemId: string, route: any, phase: any) {
    // Force-mark the item as unlocked (not completed, just enabled)
    this.progressService.saveUnlock(route.category, itemId);
    this.recalculate();
  }

  private recalculate() {
    let streak = 0;
    let completedTotal = 0;
    let totalItems = 0;
    // Track the index of the last completed task globally for time saving calc
    let lastCompletedTaskIndex = -1;

    this.parsedRoutes = this.rawData.map((routeData, rIdx) => {
      const category = `study_route_${rIdx}`;
      const phasesMap = new Map<string, any[]>();

      let previousCompleted = true;

      routeData.tasks.forEach((task: any, tIdx: number) => {
        const taskId    = `study_task_${rIdx}_${tIdx}`;
        const isUnlocked = this.progressService.getUnlock(category, taskId);
        const isCompleted = this.progressService.getProgress(category, taskId);

        if (isCompleted) {
          streak++;
          completedTotal++;
          lastCompletedTaskIndex = tIdx;
        }
        totalItems++;

        const isDisabled  = !previousCompleted && !isUnlocked;

        const item = {
          id:          taskId,
          label:       task.title,
          subLabel:    task.date,
          disabled:    isDisabled,
          isHandsOn:   task.isHandsOn || false,
          unlockable:  task.unlockable !== false,  // default true
        };

        const phaseName = task.phase;
        if (!phasesMap.has(phaseName)) {
          phasesMap.set(phaseName, []);
        }
        phasesMap.get(phaseName)!.push(item);

        previousCompleted = isCompleted || isUnlocked;
      });

      // Convert map → array with phase metadata
      let prevPhaseCompleted = true;
      const phasesArray = Array.from(phasesMap.entries()).map(([name, items], pIdx) => {
        const completedItems = items.filter((i: any) =>
          this.progressService.getProgress(category, i.id)
        ).length;
        const isCompleted = completedItems === items.length && items.length > 0;
        const isActive    = prevPhaseCompleted && !isCompleted;

        // Auto-expand first active phase
        const key = `${category}_${pIdx}`;
        if (isActive && this.expandedPhases[key] === undefined) {
          this.expandedPhases[key] = true;
        }

        prevPhaseCompleted = isCompleted;
        return { name, items, completedItems, isCompleted, isActive };
      });

      return { name: routeData.route, category, phases: phasesArray };
    });

    this.fireStreak     = streak;
    this.completedCount = completedTotal;
    this.totalCount     = totalItems;
    this.globalPercent  = totalItems > 0 ? (completedTotal / totalItems) * 100 : 0;

    this.calculateTimeReduction(lastCompletedTaskIndex, totalItems);
  }

  private calculateTimeReduction(lastCompletedIdx: number, totalTasks: number) {
    if (totalTasks === 0) return;

    // Original end date = PLAN_START + totalTasks days (1 task per calendar day)
    const origEnd = this.addCalendarDays(this.PLAN_START, totalTasks - 1);
    this.originalEndDate = this.formatDate(origEnd);

    if (lastCompletedIdx < 0) {
      this.savedDays          = 0;
      this.savedWeeks         = 0;
      this.remainingSavedDays = 0;
      this.projectedEndDate   = this.originalEndDate;
      return;
    }

    // What day in the calendar does the last completed task correspond to?
    const expectedCalendarDay = this.addCalendarDays(this.PLAN_START, lastCompletedIdx);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Days ahead = difference between expected calendar day and today
    const msPerDay    = 1000 * 60 * 60 * 24;
    const daysAhead   = Math.floor(
      (today.getTime() - expectedCalendarDay.getTime()) / msPerDay
    );

    this.savedDays = Math.max(0, daysAhead);

    if (this.savedDays > 0) {
      this.savedWeeks         = Math.floor(this.savedDays / 7);
      this.remainingSavedDays = this.savedDays % 7;

      const projEnd = this.addCalendarDays(origEnd, -this.savedDays);
      this.projectedEndDate = this.formatDate(projEnd);
    } else {
      this.savedWeeks         = 0;
      this.remainingSavedDays = 0;
      this.projectedEndDate   = this.originalEndDate;
    }
  }

  private addCalendarDays(base: Date, days: number): Date {
    const d = new Date(base);
    d.setDate(d.getDate() + days);
    return d;
  }

  private formatDate(d: Date): string {
    const days   = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
    const months = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
    return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }
}
