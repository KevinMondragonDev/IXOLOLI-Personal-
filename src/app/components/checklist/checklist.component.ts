import { Component, Input, Output, EventEmitter } from '@angular/core';
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
          class="flex items-center p-4 rounded-xl border transition-all duration-300 relative overflow-hidden"
          [ngClass]="{
            'bg-gray-800/50 hover:bg-gray-700/60 border-gray-700/50 cursor-pointer group': !item.disabled && !item.isHandsOn,
            'bg-gray-900/30 border-gray-800/30 cursor-not-allowed opacity-60': item.disabled,
            'bg-emerald-900/20 border-emerald-500/30': isChecked(item.id) && !item.disabled && !item.isHandsOn,
            'bg-orange-950/40 border-orange-800/40 hover:bg-orange-900/50 cursor-pointer group': !item.disabled && item.isHandsOn && !isChecked(item.id),
            'bg-gradient-to-r from-orange-900/40 to-red-900/40 border-orange-500/50': isChecked(item.id) && !item.disabled && item.isHandsOn
          }"
          (click)="toggleClick(item.id, item.disabled)">
          
          <!-- Background Glow for HandsOn completed -->
          <div *ngIf="item.isHandsOn && isChecked(item.id)" class="absolute inset-0 bg-orange-500/5 mix-blend-overlay"></div>

          <div class="relative flex items-center justify-center z-10">
            
            <ng-container *ngIf="item.disabled; else enabledCheck">
              <div class="w-6 h-6 rounded-md border-2 border-gray-700 bg-gray-800 flex items-center justify-center">
                <svg class="w-3.5 h-3.5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
              </div>
            </ng-container>

            <ng-template #enabledCheck>
              <input type="checkbox" 
                     class="peer sr-only" 
                     [checked]="isChecked(item.id)"
                     (change)="toggleChange(item.id, $event)" />
              <div class="w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors"
                   [ngClass]="{
                     'border-gray-500 peer-checked:bg-emerald-500 peer-checked:border-emerald-500': !item.isHandsOn,
                     'border-orange-500/70 peer-checked:bg-gradient-to-br peer-checked:from-orange-500 peer-checked:to-red-500 peer-checked:border-transparent': item.isHandsOn
                   }">
                <svg *ngIf="isChecked(item.id)" class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </ng-template>

          </div>
          <div class="ml-4 flex-1 z-10">
            <p class="font-medium transition-colors flex items-center gap-2" 
               [ngClass]="{
                 'text-gray-200': !isChecked(item.id) && !item.disabled && !item.isHandsOn,
                 'text-orange-400': !isChecked(item.id) && !item.disabled && item.isHandsOn,
                 'text-gray-500': item.disabled,
                 'text-gray-500 line-through': isChecked(item.id) && !item.isHandsOn,
                 'text-orange-300/70 line-through': isChecked(item.id) && item.isHandsOn
               }">
              <span *ngIf="item.isHandsOn && !isChecked(item.id)">🔥</span>
              <span *ngIf="isChecked(item.id)" class="scale-110 inline-block transition-transform duration-300">🔥</span>
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
  @Input() items: {id: string, label: string, subLabel?: string, disabled?: boolean, isHandsOn?: boolean}[] = [];
  @Output() itemToggled = new EventEmitter<string>();

  constructor(private progressService: ProgressService) {}

  isChecked(id: string): boolean {
    return this.progressService.getProgress(this.category, id);
  }

  toggleClick(id: string, disabled: boolean | undefined) {
    if (disabled) return;
    const current = this.isChecked(id);
    this.progressService.saveProgress(this.category, id, !current);
    this.itemToggled.emit(id);
  }

  toggleChange(id: string, event: Event) {
    event.stopPropagation();
    const checked = (event.target as HTMLInputElement).checked;
    this.progressService.saveProgress(this.category, id, checked);
    this.itemToggled.emit(id);
  }
}
