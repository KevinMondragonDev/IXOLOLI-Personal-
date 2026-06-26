import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ChecklistComponent } from '../checklist/checklist.component';
import { ProgressService } from '../../services/progress.service';

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
            <h1 class="text-4xl font-bold flex items-center gap-3">
              <span class="text-red-500/90 drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]">💀</span>
              <span class="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">IXOLOLI</span>
            </h1>
            <p class="text-gray-400 mt-2 text-lg">Tu checklist de poder diario.</p>
          </div>
          <div class="text-right flex flex-col items-end gap-2">
            <div>
              <p class="text-2xl font-light text-emerald-400">{{ todayName }}</p>
              <p class="text-sm text-gray-500">{{ currentDate | date:'longDate' }}</p>
            </div>
            <button (click)="exportData()" class="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 border border-gray-700">
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Exportar a CSV
            </button>
          </div>
        </header>

        <!-- Menu Navigation -->
        <nav class="flex gap-4 overflow-x-auto pb-2">
          <a routerLink="/" class="whitespace-nowrap px-5 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors text-white">Tablero Diario</a>
          <a routerLink="/study" class="whitespace-nowrap px-5 py-2.5 bg-gray-900 border border-gray-800 hover:border-purple-500/50 rounded-lg text-sm font-medium transition-colors text-gray-400 hover:text-purple-400 flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            Rutas Globales
          </a>
          <a routerLink="/nutrition" class="whitespace-nowrap px-5 py-2.5 bg-gray-900 border border-gray-800 hover:border-green-500/50 rounded-lg text-sm font-medium transition-colors text-gray-400 hover:text-green-400 flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
            Nutrición
          </a>
        </nav>

        <div class="grid grid-cols-1 gap-8">
          <!-- Training Section -->
          <section class="space-y-6 bg-gray-900/50 rounded-2xl p-6 border border-gray-800 backdrop-blur-sm relative overflow-hidden">
            <div *ngIf="showDeathAnimation" class="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
              <span class="text-9xl opacity-20 animate-bounce">💀</span>
            </div>
            
            <div class="relative z-10 flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div class="flex items-center gap-3">
                <div class="p-3 bg-emerald-500/10 rounded-lg">
                  <svg class="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <div>
                  <h2 class="text-2xl font-semibold text-white">Entrenamiento</h2>
                  <p class="text-gray-400 text-sm" *ngIf="todayRoutine">{{ todayRoutine.focus }}</p>
                </div>
              </div>
              <div *ngIf="deathStreak > 0" class="flex items-center gap-2 bg-gradient-to-r from-red-900/40 to-black/40 border border-red-500/30 px-4 py-2 rounded-xl text-red-400 font-semibold shadow-[0_0_15px_rgba(239,68,68,0.15)] animate-pulse shrink-0">
                <span class="text-xl">💀</span>
                <span>Racha: {{ deathStreak }} Rutinas</span>
              </div>
            </div>

            <ng-container *ngIf="todayRoutine; else restDay">
              <div class="relative z-10">
                <app-checklist category="training" [items]="trainingItems" (itemToggled)="onTrainingToggled()"></app-checklist>
              </div>
            </ng-container>
            <ng-template #restDay>
              <div class="relative z-10 p-8 text-center bg-gray-800/30 rounded-xl border border-gray-800 border-dashed" *ngIf="deudasEntrenamiento.length === 0">
                <p class="text-gray-400">Hoy es día de descanso activo o recuperación.</p>
              </div>
            </ng-template>

            <!-- Deudas de Entrenamiento -->
            <div *ngIf="deudasEntrenamiento.length > 0" class="mt-6 relative z-10 border-t border-gray-800 pt-6">
              <h3 class="text-xl font-semibold text-orange-400 mb-4 flex items-center gap-2">
                <span>⚠️</span> Deudas de Entrenamiento
              </h3>
              <div class="space-y-6">
                <div *ngFor="let deuda of deudasEntrenamiento" class="bg-gray-800/40 p-4 rounded-xl border border-orange-500/20">
                  <h4 class="text-lg font-medium text-gray-300 mb-3">{{ deuda.day }} - {{ deuda.focus }}</h4>
                  <app-checklist [category]="deuda.category" [items]="deuda.items" (itemToggled)="onTrainingToggled()"></app-checklist>
                </div>
              </div>
            </div>
          </section>

          <!-- Study Section -->
          <section class="space-y-6 bg-gray-900/50 rounded-2xl p-6 border border-gray-800 backdrop-blur-sm">
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
                <app-checklist [category]="'study_' + route.routeId" [items]="[{id: route.id, label: route.label, subLabel: route.phase, bullets: route.bullets}]"></app-checklist>
              </div>
            </div>
            
            <ng-template #noStudy>
              <div class="p-8 text-center bg-gray-800/30 rounded-xl border border-gray-800 border-dashed" *ngIf="deudasEstudioGrouped.length === 0">
                <p class="text-gray-400">No hay tareas de estudio programadas para el día de hoy.</p>
              </div>
            </ng-template>

            <!-- Deudas de Estudio -->
            <div *ngIf="deudasEstudioGrouped.length > 0" class="mt-6 relative z-10 border-t border-gray-800 pt-6">
              <h3 class="text-xl font-semibold text-orange-400 mb-4 flex items-center gap-2">
                <span>⚠️</span> Deudas de Estudio
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div *ngFor="let group of deudasEstudioGrouped">
                  <h3 class="text-lg font-medium text-gray-300 mb-4 border-b border-gray-800 pb-2">
                    {{ group.route }}
                  </h3>
                  <app-checklist [category]="'study_' + group.routeId" [items]="group.items"></app-checklist>
                </div>
              </div>
            </div>
          </section>

          <!-- Serenity Section -->
          <section class="space-y-6 bg-gray-900/50 rounded-2xl p-6 border border-gray-800 backdrop-blur-sm relative overflow-hidden">
            <div *ngIf="showSerenityAnimation" class="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
              <span class="text-9xl opacity-20 animate-pulse">🧘‍♂️</span>
            </div>
            
            <div class="relative z-10 flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div class="flex items-center gap-3">
                <div class="p-3 bg-blue-500/10 rounded-lg">
                  <svg class="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h2 class="text-2xl font-semibold text-white">Desintoxicación y Serenidad</h2>
                  <p class="text-gray-400 text-sm">Mantén tu cuerpo y mente limpios</p>
                </div>
              </div>
              <div *ngIf="serenityStreak > 0" class="flex items-center gap-2 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/30 px-4 py-2 rounded-xl text-blue-400 font-semibold shadow-[0_0_15px_rgba(59,130,246,0.15)] animate-pulse shrink-0">
                <span class="text-xl">🧘‍♂️</span>
                <span>Racha: {{ serenityStreak }} Días Libres</span>
              </div>
            </div>

            <div class="relative z-10">
              <app-checklist category="serenity" [items]="habitsItems" (itemToggled)="onHabitsToggled()"></app-checklist>
            </div>
          </section>

        </div>
      </div>
      
      <!-- Notifications Container -->
      <div class="fixed top-6 right-6 z-50 flex flex-col gap-3">
        <div *ngFor="let notification of activeNotifications; let i = index" 
             class="bg-gray-900 border border-gray-700 shadow-2xl rounded-xl p-4 flex items-center gap-3 transform transition-all duration-500 animate-fade-in-down">
          <span class="text-gray-200 font-medium">{{ notification }}</span>
          <button (click)="dismissNotification(i)" class="text-gray-500 hover:text-gray-300 ml-2">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  todayRoutine: any;
  trainingItems: any[] = [];
  estudioItems: { route: string, routeId: string, phase: string, id: string, label: string, bullets: string[] }[] = [];
  
  deudasEntrenamiento: { day: string, focus: string, category: string, items: any[] }[] = [];
  deudasEstudioGrouped: { route: string, routeId: string, items: any[] }[] = [];
  
  deathStreak: number = 0;
  showDeathAnimation = false;

  serenityStreak: number = 0;
  showSerenityAnimation = false;
  habitsItems = [
    { id: 'habit_nosmoke', label: 'No fumar' },
    { id: 'habit_nodrink', label: 'No beber alcohol' },
    { id: 'habit_notouch', label: 'blue' }
  ];

  activeNotifications: string[] = [];

  currentDate = new Date();
  todayName = '';
  todayDateText = '';

  private days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  constructor(private dataService: DataService, private progressService: ProgressService) {
    this.todayName = this.days[this.currentDate.getDay()];
    // Generates format like "30 de abril"
    this.todayDateText = new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long' }).format(this.currentDate);
  }

  ngOnInit() {
    this.setupNotifications();
    this.deathStreak = this.progressService.getDeathStreak();
    this.serenityStreak = this.progressService.getSerenityStreak();
    this.checkHabitsStatus();

    this.dataService.getEntrenamiento().subscribe(data => {
      this.todayRoutine = data.find((d: any) => d.day === this.todayName);
      if (this.todayRoutine) {
        this.trainingItems = this.todayRoutine.exercises.map((ex: any, idx: number) => ({
          id: `ex_${idx}`,
          label: ex.name,
          subLabel: `${ex.sets} series x ${ex.reps}`
        }));
      }

      this.deudasEntrenamiento = [];
      const currentDayOfWeek = this.currentDate.getDay();
      const daysToMonday = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;
      
      for (let i = 0; i < daysToMonday; i++) {
        const pastDate = new Date(this.currentDate);
        pastDate.setDate(this.currentDate.getDate() - (daysToMonday - i));
        const pastDayName = this.days[pastDate.getDay()];
        const routine = data.find((d: any) => d.day === pastDayName);
        
        if (routine) {
          const wasCompleted = this.progressService.isTrainingCompletedForDate(pastDate, routine.exercises.length);
          const completedAsDebt = this.progressService.isTrainingDebtCompletedToday(pastDayName, routine.exercises.length);
          
          if (!wasCompleted && !completedAsDebt) {
            this.deudasEntrenamiento.push({
              day: pastDayName,
              focus: routine.focus,
              category: `training_${pastDayName}`,
              items: routine.exercises.map((ex: any, idx: number) => ({
                id: `ex_${idx}`,
                label: ex.name,
                subLabel: `${ex.sets} series x ${ex.reps}`
              }))
            });
          }
        }
      }

      this.checkTrainingStatus();
    });

    this.dataService.getEstudio().subscribe(data => {
      this.estudioItems = [];
      this.deudasEstudioGrouped = [];

      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const PLAN_START = new Date(2026, 5, 25); // month 5 is June
      const msPerDay = 1000 * 60 * 60 * 24;
      const diffDays = Math.floor((today.getTime() - PLAN_START.getTime()) / msPerDay);
      const tIdx = Math.floor(diffDays / 7);

      data.forEach((r: any, rIdx: number) => {
        if (tIdx >= 0 && tIdx < r.tasks.length) {
          const todayTask = r.tasks[tIdx];
          this.estudioItems.push({
            route: r.route,
            routeId: `route_${rIdx}`,
            phase: todayTask.phase,
            id: `study_task_${rIdx}_${tIdx}`,
            label: todayTask.title,
            bullets: todayTask.bullets || []
          });
        }

        // Buscar tareas de semanas anteriores en la misma ruta que no estén completadas
        const pastTasksItems = [];
        const maxPastIdx = Math.min(tIdx, r.tasks.length);
        for (let i = 0; i < maxPastIdx; i++) {
          const pastTask = r.tasks[i];
          const isCompleted = this.progressService.getProgress(`study_route_${rIdx}`, `study_task_${rIdx}_${i}`);
          if (!isCompleted) {
            pastTasksItems.push({
              id: `study_task_${rIdx}_${i}`,
              label: pastTask.title,
              subLabel: `[Deuda - ${pastTask.date}] ${pastTask.phase}`,
              bullets: pastTask.bullets || []
            });
          }
        }

        if (pastTasksItems.length > 0) {
          this.deudasEstudioGrouped.push({
            route: r.route,
            routeId: `route_${rIdx}`,
            items: pastTasksItems
          });
        }
      });
    });
  }

  onTrainingToggled() {
    this.checkTrainingStatus(true);
  }

  checkTrainingStatus(animateIfCompleted = false) {
    if (!this.todayRoutine || this.trainingItems.length === 0) return;
    
    let allCompleted = true;
    for (const item of this.trainingItems) {
      if (!this.progressService.getProgress('training', item.id)) {
        allCompleted = false;
        break;
      }
    }

    const previousStreak = this.deathStreak;
    this.progressService.setDeathStreakForToday(allCompleted);
    this.deathStreak = this.progressService.getDeathStreak();

    if (allCompleted && animateIfCompleted && this.deathStreak > previousStreak) {
      this.showDeathAnimation = true;
      setTimeout(() => this.showDeathAnimation = false, 2000);
    }
  }

  onHabitsToggled() {
    this.checkHabitsStatus(true);
  }

  checkHabitsStatus(animateIfCompleted = false) {
    let allCompleted = true;
    for (const item of this.habitsItems) {
      if (!this.progressService.getProgress('serenity', item.id)) {
        allCompleted = false;
        break;
      }
    }

    const previousStreak = this.serenityStreak;
    this.progressService.setSerenityStreakForToday(allCompleted);
    this.serenityStreak = this.progressService.getSerenityStreak();

    if (allCompleted && animateIfCompleted && this.serenityStreak > previousStreak) {
      this.showSerenityAnimation = true;
      setTimeout(() => this.showSerenityAnimation = false, 2000);
    }
  }

  exportData() {
    this.progressService.exportProgressToCSV();
  }

  setupNotifications() {
    const currentHour = new Date().getHours();
    // Solo sale en las tardes (12 PM a 8 PM)
    if (currentHour >= 12 && currentHour <= 20) {
      const lastShown = localStorage.getItem('ixololi_last_notification_date');
      const today = new Date().toDateString();
      
      if (lastShown !== today) {
        // Tiempo random entre 5 y 30 segundos
        const randomDelay = Math.floor(Math.random() * (30000 - 5000 + 1)) + 5000;
        
        setTimeout(() => {
          this.triggerNotifications();
          localStorage.setItem('ixololi_last_notification_date', today);
        }, randomDelay);
      }
    }
  }

  triggerNotifications() {
    const studyStreak = this.progressService.getStudyStreak();
    const delays = [0, 1000, 2000]; // Escalonar notificaciones
    let delayIdx = 0;

    if (this.deathStreak > 0) {
      setTimeout(() => this.showNotification(`¡Racha de Entrenamiento: ${this.deathStreak} Rutinas completadas! 💀`), delays[delayIdx++]);
    }
    if (studyStreak > 0) {
      setTimeout(() => this.showNotification(`¡Racha de Estudio: ${studyStreak} Días a fuego! 🔥`), delays[delayIdx++]);
    }
    if (this.serenityStreak > 0) {
      setTimeout(() => this.showNotification(`¡Llevas ${this.serenityStreak} días limpio! 🧘‍♂️`), delays[delayIdx++]);
    }
  }

  showNotification(message: string) {
    this.activeNotifications.push(message);
    // Desaparece sola a los 8 segundos
    setTimeout(() => {
      this.activeNotifications.shift();
    }, 8000);
  }

  dismissNotification(index: number) {
    this.activeNotifications.splice(index, 1);
  }
}
