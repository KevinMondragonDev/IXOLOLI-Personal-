import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressService } from '../../services/progress.service';

@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-3">
      @for (item of items; track item.id) {
        <div 
          class="flex items-center p-4 bg-gray-800/50 hover:bg-gray-700/60 rounded-xl border border-gray-700/50 cursor-pointer transition-all duration-300 group"
          [ngClass]="{'bg-emerald-900/20': isChecked(item.id), 'border-emerald-500/30': isChecked(item.id)}"
          (click)="toggleClick(item.id)">
          <div class="relative flex items-center justify-center">
            <input type="checkbox" 
                   class="peer sr-only" 
                   [checked]="isChecked(item.id)"
                   (change)="toggleChange(item.id, $event)" />
            <div class="w-6 h-6 rounded-md border-2 border-gray-500 peer-checked:bg-emerald-500 peer-checked:border-emerald-500 flex items-center justify-center transition-colors">
              <svg *ngIf="isChecked(item.id)" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div class="ml-4 flex-1">
            <p class="text-gray-200 font-medium transition-colors" [class.text-gray-500]="isChecked(item.id)" [class.line-through]="isChecked(item.id)">
              {{ item.label }}
            </p>
            <p *ngIf="item.subLabel" class="text-sm text-gray-500 mt-0.5">{{ item.subLabel }}</p>
          </div>
        </div>
      }
    </div>
  `
})
export class ChecklistComponent {
  @Input() category!: string;
  @Input() items: {id: string, label: string, subLabel?: string}[] = [];

  constructor(private progressService: ProgressService) {}

  isChecked(id: string): boolean {
    return this.progressService.getProgress(this.category, id);
  }

  toggleClick(id: string) {
    const current = this.isChecked(id);
    this.progressService.saveProgress(this.category, id, !current);
  }

  toggleChange(id: string, event: Event) {
    event.stopPropagation();
    const checked = (event.target as HTMLInputElement).checked;
    this.progressService.saveProgress(this.category, id, checked);
  }
}
