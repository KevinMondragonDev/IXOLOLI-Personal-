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
        <header class="flex justify-between items-center border-b border-gray-800 pb-6">
          <div>
            <h1 class="text-3xl font-bold text-white flex items-center gap-3">
              <svg class="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Rutas de Estudio
            </h1>
            <p class="text-gray-400 mt-2">Completa un módulo para desbloquear el siguiente. Avanza a tu propio ritmo.</p>
          </div>
          <a routerLink="/" class="px-4 py-2 bg-gray-900 border border-gray-800 hover:bg-gray-800 rounded-lg text-sm transition-colors text-gray-300 flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            Volver
          </a>
        </header>

        <div class="grid grid-cols-1 gap-8">
          <div *ngFor="let route of parsedRoutes" class="space-y-6 bg-gray-900/50 rounded-2xl p-6 border border-gray-800 backdrop-blur-sm">
            <h2 class="text-2xl font-semibold text-purple-400 mb-2">{{ route.name }}</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div *ngFor="let phase of route.phases">
                <h3 class="text-lg font-medium text-gray-300 mb-3 border-b border-gray-800 pb-2">{{ phase.name }}</h3>
                <app-checklist [category]="route.category" [items]="phase.items" (itemToggled)="recalculateDisabled()"></app-checklist>
              </div>
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

  constructor(private dataService: DataService, private progressService: ProgressService) {}

  ngOnInit() {
    this.dataService.getEstudio().subscribe(data => {
      this.rawData = data;
      this.recalculateDisabled();
    });
  }

  recalculateDisabled() {
    this.parsedRoutes = this.rawData.map((routeData, rIdx) => {
      const category = `study_route_${rIdx}`;
      const phasesMap = new Map<string, any[]>();
      
      let previousTaskCompleted = true; // El primero de la ruta siempre habilitado si no hay nada más
      
      routeData.tasks.forEach((task: any, tIdx: number) => {
        const taskId = `study_task_${rIdx}_${tIdx}`;
        const isCompleted = this.progressService.getProgress(category, taskId);
        
        const item = {
          id: taskId,
          label: task.title,
          subLabel: task.date,
          disabled: !previousTaskCompleted
        };
        
        if (!phasesMap.has(task.phase)) {
          phasesMap.set(task.phase, []);
        }
        phasesMap.get(task.phase)!.push(item);
        
        // El siguiente item requiere que este esté completado
        previousTaskCompleted = isCompleted;
      });

      const phasesArray = Array.from(phasesMap.entries()).map(([name, items]) => ({
        name,
        items
      }));

      return {
        name: routeData.route,
        category,
        phases: phasesArray
      };
    });
  }
}
