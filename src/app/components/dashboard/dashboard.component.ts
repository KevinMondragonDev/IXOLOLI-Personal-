import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ChecklistComponent } from '../checklist/checklist.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, ChecklistComponent],
  template: `
    <div class="min-h-screen bg-gray-950 text-gray-100 font-sans p-4 md:p-8">
      <div class="max-w-4xl mx-auto space-y-8">
        <!-- Header -->
        <header class="flex justify-between items-end border-b border-gray-800 pb-6">
          <div>
            <h1 class="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              IXOLOLI
            </h1>
            <p class="text-gray-400 mt-2 text-lg">Tu checklist de poder diario.</p>
          </div>
          <div class="text-right">
            <p class="text-2xl font-light text-emerald-400">{{ todayName }}</p>
            <p class="text-sm text-gray-500">{{ currentDate | date:'longDate' }}</p>
          </div>
        </header>

        <!-- Menu Navigation -->
        <nav class="flex gap-4">
          <a routerLink="/" class="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors text-white">Tablero Diario</a>
          <a routerLink="/grocery" class="px-5 py-2.5 bg-gray-900 border border-gray-800 hover:border-emerald-500/50 rounded-lg text-sm font-medium transition-colors text-gray-400 hover:text-emerald-400 flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            Lista del Súper
          </a>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Training Section -->
          <section class="space-y-6 bg-gray-900/50 rounded-2xl p-6 border border-gray-800 backdrop-blur-sm">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-emerald-500/10 rounded-lg">
                <svg class="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <div>
                <h2 class="text-2xl font-semibold text-white">Entrenamiento</h2>
                <p class="text-gray-400 text-sm" *ngIf="todayRoutine">{{ todayRoutine.focus }}</p>
              </div>
            </div>

            <ng-container *ngIf="todayRoutine; else restDay">
              <app-checklist category="training" [items]="trainingItems"></app-checklist>
            </ng-container>
            <ng-template #restDay>
              <div class="p-8 text-center bg-gray-800/30 rounded-xl border border-gray-800 border-dashed">
                <p class="text-gray-400">Hoy es día de descanso activo o recuperación.</p>
              </div>
            </ng-template>
          </section>

          <!-- Diet Section -->
          <section class="space-y-6 bg-gray-900/50 rounded-2xl p-6 border border-gray-800 backdrop-blur-sm">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-cyan-500/10 rounded-lg">
                <svg class="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"/></svg>
              </div>
              <div>
                <h2 class="text-2xl font-semibold text-white">Nutrición</h2>
                <p class="text-gray-400 text-sm">Tus comidas preparadas</p>
              </div>
            </div>

            <div class="space-y-8">
              <div *ngFor="let meal of dietMenu">
                <h3 class="text-lg font-medium text-gray-300 mb-3 border-b border-gray-800 pb-2">{{ meal.meal }} <span class="text-xs text-cyan-500/80 font-normal ml-2">{{ meal.type }}</span></h3>
                <app-checklist [category]="'diet_' + meal.meal" [items]="getDietItems(meal)"></app-checklist>
              </div>
            </div>
          </section>

          <!-- Study Section -->
          <section class="space-y-6 bg-gray-900/50 rounded-2xl p-6 border border-gray-800 backdrop-blur-sm lg:col-span-2">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-purple-500/10 rounded-lg">
                <svg class="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h2 class="text-2xl font-semibold text-white">Estudio del Día</h2>
                <p class="text-gray-400 text-sm">Temario para hoy: {{ todayDateText }}</p>
              </div>
            </div>

            <div *ngIf="estudioItems.length > 0; else noStudy" class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div *ngFor="let route of estudioItems">
                <h3 class="text-lg font-medium text-gray-300 mb-4 border-b border-gray-800 pb-2">
                  {{ route.route }}
                </h3>
                <app-checklist [category]="'study_' + route.routeId" [items]="[{id: route.id, label: route.label, subLabel: route.phase}]"></app-checklist>
              </div>
            </div>
            
            <ng-template #noStudy>
              <div class="p-8 text-center bg-gray-800/30 rounded-xl border border-gray-800 border-dashed">
                <p class="text-gray-400">No hay tareas de estudio programadas para el día de hoy.</p>
              </div>
            </ng-template>
          </section>

        </div>
      </div>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  todayRoutine: any;
  dietMenu: any[] = [];
  trainingItems: any[] = [];
  estudioItems: { route: string, routeId: string, phase: string, id: string, label: string }[] = [];
  
  currentDate = new Date();
  todayName = '';
  todayDateText = '';

  private days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  constructor(private dataService: DataService) {
    this.todayName = this.days[this.currentDate.getDay()];
    // Generates format like "30 de abril"
    this.todayDateText = new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long' }).format(this.currentDate);
  }

  ngOnInit() {
    this.dataService.getEntrenamiento().subscribe(data => {
      this.todayRoutine = data.find((d: any) => d.day === this.todayName);
      if (this.todayRoutine) {
        this.trainingItems = this.todayRoutine.exercises.map((ex: any, idx: number) => ({
          id: `ex_${idx}`,
          label: ex.name,
          subLabel: `${ex.sets} series x ${ex.reps}`
        }));
      }
    });

    this.dataService.getDieta().subscribe(data => {
      this.dietMenu = data.menu;
    });

    this.dataService.getEstudio().subscribe(data => {
      this.estudioItems = [];
      data.forEach((r: any, rIdx: number) => {
        // Encontrar la tarea que coincide con la fecha de hoy
        const todayTask = r.tasks.find((t: any) => t.date.toLowerCase() === this.todayDateText.toLowerCase());
        if (todayTask) {
          this.estudioItems.push({
            route: r.route,
            routeId: `route_${rIdx}`,
            phase: todayTask.phase,
            id: `study_task_${this.todayDateText.replace(/ /g, '')}`,
            label: todayTask.title
          });
        }
      });
    });
  }

  getDietItems(meal: any) {
    return meal.items.map((item: string, idx: number) => ({
      id: `diet_${idx}`,
      label: item
    }));
  }
}
