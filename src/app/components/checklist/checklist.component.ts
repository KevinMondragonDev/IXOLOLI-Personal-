import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressService } from '../../services/progress.service';

@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    .lock-btn { user-select: none; -webkit-user-select: none; }
    .hold-ring {
      position: absolute;
      inset: 0;
      border-radius: 0.75rem;
      pointer-events: none;
      background: conic-gradient(rgba(168,85,247,0.5) var(--p, 0%), transparent var(--p, 0%));
      transition: opacity 0.1s;
    }
  `],
  template: `
    <div class="space-y-3">
      @for (item of items; track item.id) {
        <div
          class="flex items-center p-4 rounded-xl border transition-all duration-300 relative overflow-hidden select-none"
          [ngClass]="{
            'bg-gray-800/50 hover:bg-gray-700/60 border-gray-700/50 cursor-pointer group': !item.disabled && !item.isHandsOn,
            'bg-gray-900/30 border-gray-800/30 cursor-not-allowed opacity-60': item.disabled && !item.unlockable,
            'bg-gray-900/40 border-purple-900/40 cursor-not-allowed': item.disabled && item.unlockable,
            'bg-emerald-900/20 border-emerald-500/30': isChecked(item.id) && !item.disabled && !item.isHandsOn,
            'bg-orange-950/40 border-orange-800/40 hover:bg-orange-900/50 cursor-pointer group': !item.disabled && item.isHandsOn && !isChecked(item.id),
            'bg-gradient-to-r from-orange-900/40 to-red-900/40 border-orange-500/50': isChecked(item.id) && !item.disabled && item.isHandsOn
          }"
          (click)="toggleClick(item.id, item.disabled)">

          <!-- Hold progress ring overlay -->
          <div *ngIf="item.disabled && item.unlockable && holdingId === item.id"
               class="hold-ring"
               [style.--p]="holdPercent + '%'">
          </div>

          <!-- Background Glow for HandsOn completed -->
          <div *ngIf="item.isHandsOn && isChecked(item.id)" class="absolute inset-0 bg-orange-500/5 mix-blend-overlay pointer-events-none"></div>

          <!-- Checkbox / Lock icon -->
          <div class="relative flex items-center justify-center z-10 shrink-0">

            <!-- LOCKED & unlockable: hold-to-unlock button -->
            <ng-container *ngIf="item.disabled && item.unlockable; else notHoldable">
              <button
                class="lock-btn w-8 h-8 rounded-md border-2 border-purple-700/60 bg-purple-950/60 flex items-center justify-center relative touch-none"
                title="Mantén presionado 2 segundos para desbloquear"
                (mousedown)="startHold($event, item)"
                (mouseup)="cancelHold()"
                (mouseleave)="cancelHold()"
                (touchstart)="startHold($event, item)"
                (touchend)="cancelHold()"
                (touchcancel)="cancelHold()"
                (click)="$event.stopPropagation()">
                <!-- Animated ring around lock -->
                <svg *ngIf="holdingId !== item.id" class="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                <svg *ngIf="holdingId === item.id" class="w-4 h-4 text-purple-300 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                <!-- Progress circle SVG -->
                <svg *ngIf="holdingId === item.id" class="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 32 32">
                  <circle cx="16" cy="16" r="14" fill="none" stroke="rgba(168,85,247,0.8)" stroke-width="3"
                          [attr.stroke-dasharray]="'88'" [attr.stroke-dashoffset]="88 - (88 * holdPercent / 100)"
                          style="transition: stroke-dashoffset 0.05s linear;"/>
                </svg>
              </button>
            </ng-container>

            <!-- LOCKED & NOT unlockable: plain lock -->
            <ng-template #notHoldable>
              <ng-container *ngIf="item.disabled; else enabledCheck">
                <div class="w-6 h-6 rounded-md border-2 border-gray-700 bg-gray-800 flex items-center justify-center">
                  <svg class="w-3.5 h-3.5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                  </svg>
                </div>
              </ng-container>
            </ng-template>

            <!-- UNLOCKED checkbox -->
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

          <!-- Label -->
          <div class="ml-4 flex-1 z-10">
            <p class="font-medium transition-colors flex items-center gap-2"
               [ngClass]="{
                 'text-gray-200': !isChecked(item.id) && !item.disabled && !item.isHandsOn,
                 'text-orange-400': !isChecked(item.id) && !item.disabled && item.isHandsOn,
                 'text-purple-300/70 italic text-sm': item.disabled && item.unlockable,
                 'text-gray-600': item.disabled && !item.unlockable,
                 'text-gray-500 line-through': isChecked(item.id) && !item.isHandsOn,
                 'text-orange-300/70 line-through': isChecked(item.id) && item.isHandsOn
               }">
              <span *ngIf="item.isHandsOn && !isChecked(item.id) && !item.disabled">🔥</span>
              <span *ngIf="isChecked(item.id)" class="scale-110 inline-block transition-transform duration-300">🔥</span>
              {{ item.label }}
            </p>
            <p *ngIf="item.subLabel" class="text-sm mt-0.5"
               [ngClass]="item.disabled ? 'text-gray-700' : 'text-gray-500'">{{ item.subLabel }}</p>
            <!-- Hold hint -->
            <p *ngIf="item.disabled && item.unlockable && holdingId !== item.id"
               class="text-xs text-purple-500/60 mt-0.5">
              Mantén el 🔒 presionado para adelantar
            </p>
            <p *ngIf="item.disabled && item.unlockable && holdingId === item.id"
               class="text-xs text-purple-400 mt-0.5 animate-pulse">
              Desbloqueando... {{ holdPercent | number:'1.0-0' }}%
            </p>
          </div>
        </div>
      }
    </div>
  `
})
export class ChecklistComponent {
  @Input() category!: string;
  @Input() items: {
    id: string;
    label: string;
    subLabel?: string;
    disabled?: boolean;
    isHandsOn?: boolean;
    unlockable?: boolean;
  }[] = [];
  @Output() itemToggled = new EventEmitter<string>();
  @Output() itemUnlocked = new EventEmitter<string>();

  holdingId: string | null = null;
  holdPercent: number = 0;

  private holdTimer: any = null;
  private holdInterval: any = null;
  private readonly HOLD_MS = 2000;

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

  startHold(event: Event, item: any) {
    event.preventDefault();
    event.stopPropagation();
    if (!item.disabled || !item.unlockable) return;

    this.holdingId = item.id;
    this.holdPercent = 0;
    const startTime = Date.now();

    this.holdInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      this.holdPercent = Math.min(100, (elapsed / this.HOLD_MS) * 100);
    }, 30);

    this.holdTimer = setTimeout(() => {
      this.completeHold(item.id);
    }, this.HOLD_MS);
  }

  cancelHold() {
    if (this.holdTimer) clearTimeout(this.holdTimer);
    if (this.holdInterval) clearInterval(this.holdInterval);
    this.holdTimer = null;
    this.holdInterval = null;
    this.holdingId = null;
    this.holdPercent = 0;
  }

  private completeHold(id: string) {
    if (this.holdInterval) clearInterval(this.holdInterval);
    this.holdTimer = null;
    this.holdInterval = null;
    this.holdPercent = 100;
    setTimeout(() => {
      this.holdingId = null;
      this.holdPercent = 0;
    }, 200);
    this.itemUnlocked.emit(id);
  }
}
