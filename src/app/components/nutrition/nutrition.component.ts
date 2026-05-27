import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NutritionService, MealSlot, FoodItem } from '../../services/nutrition.service';

interface SelectedItem {
  foodName: string;
  emoji: string;
  portion: string;
  grupo: string;
}

@Component({
  selector: 'app-nutrition',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="min-h-screen bg-gray-950 text-gray-100 font-sans pb-32">
      <!-- Sticky Header + Meal Tabs -->
      <div class="sticky top-0 z-30 bg-gray-950/95 backdrop-blur-md border-b border-gray-800 shadow-lg">
        <div class="max-w-6xl mx-auto px-4 md:px-8 pt-4 md:pt-6">
          <div class="flex justify-between items-center mb-4">
            <div>
              <h1 class="text-2xl md:text-3xl font-bold flex items-center gap-2">
                <span class="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Nutrición</span>
              </h1>
              <p class="text-gray-500 text-xs md:text-sm">Plan diario · {{ totalSelected }} / {{ totalPortions }} porciones</p>
            </div>
            <a routerLink="/" class="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-xs font-medium transition-colors border border-gray-700">
              ← Tablero
            </a>
          </div>

          <!-- Meal Tabs -->
          <div *ngIf="mealSlots.length > 0" class="flex gap-2 overflow-x-auto pb-3 -mx-1 px-1 scrollbar-hide">
            <button *ngFor="let slot of mealSlots; let i = index"
                    (click)="activeMealIndex = i; searchQuery = ''; expandedPickers = {}"
                    class="flex-shrink-0 relative px-4 py-2.5 rounded-xl border transition-all duration-200 flex items-center gap-2.5"
                    [ngClass]="{
                      'bg-emerald-500/15 border-emerald-500/60 shadow-md shadow-emerald-500/10': activeMealIndex === i,
                      'bg-gray-900 border-gray-800 hover:border-gray-600': activeMealIndex !== i
                    }">
              <span class="text-xl">{{ getMealIcon(slot.key) }}</span>
              <div class="text-left">
                <p class="text-sm font-semibold" [ngClass]="{'text-emerald-300': activeMealIndex === i, 'text-gray-200': activeMealIndex !== i}">{{ slot.name }}</p>
                <p class="text-[10px] text-gray-500">{{ slot.time }}</p>
              </div>
              <span class="text-xs font-bold ml-1 px-1.5 py-0.5 rounded-full"
                    [ngClass]="{
                      'bg-emerald-500 text-white': activeMealIndex === i && isMealComplete(slot),
                      'bg-emerald-500/20 text-emerald-300': activeMealIndex === i && !isMealComplete(slot),
                      'bg-gray-800 text-gray-400': activeMealIndex !== i
                    }">
                {{ getMealSelectedCount(slot) }}/{{ getMealTotalCount(slot) }}
              </span>
            </button>
          </div>
        </div>
      </div>

      <div class="max-w-6xl mx-auto px-4 md:px-8 mt-6">
        <!-- Active Meal Content -->
        <div *ngIf="mealSlots.length > 0 && mealSlots[activeMealIndex]" class="space-y-6">

          <!-- Meal Title -->
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-2xl font-bold text-white flex items-center gap-2">
                {{ getMealIcon(mealSlots[activeMealIndex].key) }} {{ mealSlots[activeMealIndex].name }}
              </h2>
              <p class="text-sm text-gray-500 mt-1">Toca los alimentos para seleccionarlos. Toca una ranura para quitarlo.</p>
            </div>
            <button *ngIf="getMealSelectedCount(mealSlots[activeMealIndex]) > 0"
                    (click)="clearMeal(mealSlots[activeMealIndex])"
                    class="text-xs text-gray-500 hover:text-red-400 transition-colors px-3 py-1.5 rounded-lg border border-gray-800 hover:border-red-500/30">
              Limpiar comida
            </button>
          </div>

          <!-- Required Groups -->
          <div *ngFor="let group of mealSlots[activeMealIndex].groups"
               class="rounded-2xl border overflow-hidden transition-all duration-300"
               [ngClass]="{
                 'bg-emerald-900/15 border-emerald-500/30': isGroupComplete(mealSlots[activeMealIndex].key, group),
                 'bg-gray-900/40 border-gray-800': !isGroupComplete(mealSlots[activeMealIndex].key, group)
               }">

            <!-- Group Header with Portion Slots -->
            <div class="p-4 md:p-5 border-b border-gray-800/70 bg-gradient-to-r from-gray-900/80 to-gray-900/40">
              <div class="flex items-center justify-between mb-3 flex-wrap gap-2">
                <div class="flex items-center gap-2.5">
                  <span class="text-2xl">{{ getGroupIcon(group.grupo) }}</span>
                  <div>
                    <h3 class="text-lg font-bold text-white">{{ group.grupo }}</h3>
                    <p class="text-xs text-gray-500">
                      {{ group.portions }} {{ group.portions === 1 ? 'porción requerida' : 'porciones requeridas' }}
                    </p>
                  </div>
                </div>
                <span class="text-xs font-semibold px-2.5 py-1 rounded-full"
                      [ngClass]="{
                        'bg-emerald-500 text-white': isGroupComplete(mealSlots[activeMealIndex].key, group),
                        'bg-amber-500/20 text-amber-300 border border-amber-500/30': !isGroupComplete(mealSlots[activeMealIndex].key, group)
                      }">
                  <span *ngIf="isGroupComplete(mealSlots[activeMealIndex].key, group)">✓ Completo</span>
                  <span *ngIf="!isGroupComplete(mealSlots[activeMealIndex].key, group)">
                    {{ getGroupSelectedCount(mealSlots[activeMealIndex].key, group) }} / {{ getMaxPortions(group.portions) }}
                  </span>
                </span>
              </div>

              <!-- Portion Slots Visualization -->
              <div class="flex gap-2 flex-wrap">
                <div *ngFor="let slot of getPortionSlots(mealSlots[activeMealIndex].key, group); let sIdx = index"
                     (click)="slot ? removeFromGroup(mealSlots[activeMealIndex].key, group.grupo, sIdx) : null"
                     class="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center border-2 transition-all duration-200"
                     [ngClass]="{
                       'border-emerald-500/60 bg-emerald-500/10 cursor-pointer hover:bg-red-500/10 hover:border-red-500/40 group/slot': slot,
                       'border-dashed border-gray-700 bg-gray-900/50': !slot
                     }"
                     [title]="slot ? 'Toca para quitar: ' + slot.foodName : 'Porción ' + (sIdx + 1)">
                  <span *ngIf="slot" class="text-2xl md:text-3xl group-hover/slot:hidden">{{ slot.emoji }}</span>
                  <span *ngIf="slot" class="text-xl hidden group-hover/slot:inline text-red-400">✕</span>
                  <span *ngIf="!slot" class="text-gray-700 text-xs font-medium">{{ sIdx + 1 }}</span>
                </div>
              </div>

              <!-- Selected items names -->
              <div *ngIf="getGroupSelectedCount(mealSlots[activeMealIndex].key, group) > 0" class="mt-3 flex flex-wrap gap-1.5">
                <span *ngFor="let item of getSelectionsForGroup(mealSlots[activeMealIndex].key, group.grupo)"
                      class="text-xs px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  {{ item.foodName }}
                </span>
              </div>
            </div>

            <!-- Collapsed state: show "edit" button when group is complete -->
            <div *ngIf="isPickerCollapsed(mealSlots[activeMealIndex].key, group)"
                 class="px-4 md:px-5 py-3 flex items-center justify-between bg-emerald-900/10 border-t border-emerald-500/20">
              <p class="text-xs text-emerald-300/80 flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                Listo. Toca un slot arriba para cambiar, o expande para ver más opciones.
              </p>
              <button (click)="expandPicker(mealSlots[activeMealIndex].key, group.grupo)"
                      class="text-xs text-emerald-300 hover:text-white font-medium px-3 py-1.5 rounded-lg border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                Editar
              </button>
            </div>

            <!-- Food Picker -->
            <div *ngIf="!isPickerCollapsed(mealSlots[activeMealIndex].key, group)" class="p-4 md:p-5">
              <!-- Protein subcategory filter -->
              <div *ngIf="isProteinGroup(group.grupo)" class="mb-3 flex gap-2 flex-wrap">
                <button (click)="proteinFilter[group.grupo] = 'all'"
                        class="text-xs px-3 py-1.5 rounded-full border font-medium transition-colors"
                        [ngClass]="{
                          'bg-emerald-500/20 text-emerald-300 border-emerald-500/40': getProteinFilter(group.grupo) === 'all',
                          'bg-gray-800/50 text-gray-400 border-gray-700 hover:border-gray-600': getProteinFilter(group.grupo) !== 'all'
                        }">
                  Todas
                </button>
                <button (click)="proteinFilter[group.grupo] = 'A'"
                        class="text-xs px-3 py-1.5 rounded-full border font-medium transition-colors"
                        [ngClass]="{
                          'bg-green-500/20 text-green-300 border-green-500/40': getProteinFilter(group.grupo) === 'A',
                          'bg-gray-800/50 text-gray-400 border-gray-700 hover:border-gray-600': getProteinFilter(group.grupo) !== 'A'
                        }">
                  🟢 Muy baja en grasa
                </button>
                <button (click)="proteinFilter[group.grupo] = 'B'"
                        class="text-xs px-3 py-1.5 rounded-full border font-medium transition-colors"
                        [ngClass]="{
                          'bg-yellow-500/20 text-yellow-300 border-yellow-500/40': getProteinFilter(group.grupo) === 'B',
                          'bg-gray-800/50 text-gray-400 border-gray-700 hover:border-gray-600': getProteinFilter(group.grupo) !== 'B'
                        }">
                  🟡 Baja en grasa
                </button>
                <button (click)="proteinFilter[group.grupo] = 'C'"
                        class="text-xs px-3 py-1.5 rounded-full border font-medium transition-colors"
                        [ngClass]="{
                          'bg-orange-500/20 text-orange-300 border-orange-500/40': getProteinFilter(group.grupo) === 'C',
                          'bg-gray-800/50 text-gray-400 border-gray-700 hover:border-gray-600': getProteinFilter(group.grupo) !== 'C'
                        }">
                  🟠 Moderada en grasa
                </button>
              </div>

              <!-- Search -->
              <div class="relative mb-3" *ngIf="(foodOptions[group.grupo] || []).length > 6">
                <input type="text"
                       [(ngModel)]="groupSearch[group.grupo]"
                       placeholder="Buscar alimento..."
                       class="w-full bg-gray-800/60 border border-gray-700 rounded-lg pl-9 pr-3 py-2 text-sm text-gray-200 placeholder-gray-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 transition-colors" />
                <svg class="absolute left-2.5 top-2.5 w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <!-- Food Grid -->
              <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
                <button *ngFor="let food of getFilteredFoods(group.grupo)"
                        (click)="addToGroup(mealSlots[activeMealIndex].key, group.grupo, food, group.portions)"
                        [disabled]="isGroupFull(mealSlots[activeMealIndex].key, group) && getFoodCountInGroup(mealSlots[activeMealIndex].key, group.grupo, food.name) === 0"
                        class="relative group/btn flex flex-col items-center p-2.5 rounded-xl border transition-all duration-200 text-center"
                        [ngClass]="{
                          'border-emerald-500/50 bg-emerald-500/10 ring-1 ring-emerald-500/30': getFoodCountInGroup(mealSlots[activeMealIndex].key, group.grupo, food.name) > 0,
                          'border-gray-800 bg-gray-800/30 hover:bg-gray-800 hover:border-gray-600 active:scale-95': getFoodCountInGroup(mealSlots[activeMealIndex].key, group.grupo, food.name) === 0 && !(isGroupFull(mealSlots[activeMealIndex].key, group) && getFoodCountInGroup(mealSlots[activeMealIndex].key, group.grupo, food.name) === 0),
                          'border-gray-800/40 bg-gray-900/20 opacity-40 cursor-not-allowed': isGroupFull(mealSlots[activeMealIndex].key, group) && getFoodCountInGroup(mealSlots[activeMealIndex].key, group.grupo, food.name) === 0
                        }">
                  <!-- Count badge -->
                  <span *ngIf="getFoodCountInGroup(mealSlots[activeMealIndex].key, group.grupo, food.name) > 0"
                        class="absolute top-1 right-1 w-5 h-5 bg-emerald-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md z-10">
                    {{ getFoodCountInGroup(mealSlots[activeMealIndex].key, group.grupo, food.name) }}
                  </span>

                  <!-- Protein category badge -->
                  <span *ngIf="food.proteinCategory" class="absolute top-1 left-1 w-2 h-2 rounded-full"
                        [ngClass]="{
                          'bg-green-400': food.proteinCategory === 'A',
                          'bg-yellow-400': food.proteinCategory === 'B',
                          'bg-orange-400': food.proteinCategory === 'C'
                        }"
                        [title]="getProteinCategoryLabel(food.proteinCategory)"></span>

                  <span class="text-3xl md:text-4xl mb-1.5 transition-transform group-hover/btn:scale-110">{{ food.emoji }}</span>
                  <p class="text-[11px] md:text-xs font-medium text-gray-200 leading-tight line-clamp-2">{{ food.name }}</p>
                  <p class="text-[10px] text-gray-500 mt-0.5 leading-tight">{{ food.portion }}</p>
                </button>
              </div>

              <p *ngIf="getFilteredFoods(group.grupo).length === 0" class="text-center text-sm text-gray-500 py-6">
                No se encontraron alimentos
              </p>
            </div>
          </div>

        </div>

        <!-- Loading -->
        <div *ngIf="loading" class="flex flex-col items-center justify-center py-20 gap-4">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-400"></div>
          <p class="text-gray-400 text-sm">Cargando tu plan alimenticio...</p>
        </div>
      </div>

      <!-- Floating Summary Button (mobile-friendly) -->
      <div *ngIf="hasAnySelection() && !showSummary" class="fixed bottom-6 right-6 z-40">
        <button (click)="showSummary = true"
                class="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-semibold rounded-full shadow-lg shadow-emerald-500/30 transition-all">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
          Ver Resumen ({{ totalSelected }})
        </button>
      </div>

      <!-- Summary Modal -->
      <div *ngIf="showSummary" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end md:items-center justify-center p-4" (click)="showSummary = false">
        <div class="bg-gray-900 rounded-2xl border border-gray-800 max-w-2xl w-full max-h-[85vh] overflow-y-auto" (click)="$event.stopPropagation()">
          <div class="sticky top-0 bg-gray-900/95 backdrop-blur-md p-5 border-b border-gray-800 flex items-center justify-between">
            <h2 class="text-xl font-bold text-white">Resumen del Día</h2>
            <button (click)="showSummary = false" class="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div class="p-5 space-y-4">
            <div *ngFor="let slot of mealSlots" class="bg-gray-800/40 rounded-xl p-4 border border-gray-700/30">
              <div class="flex items-center justify-between mb-3">
                <h4 class="font-semibold text-gray-200 flex items-center gap-2">
                  <span>{{ getMealIcon(slot.key) }}</span>
                  {{ slot.name }}
                  <span class="text-xs text-gray-500">· {{ slot.time }}</span>
                </h4>
                <span class="text-xs px-2 py-0.5 rounded-full"
                      [ngClass]="{'bg-emerald-500/20 text-emerald-300': isMealComplete(slot), 'bg-gray-700 text-gray-400': !isMealComplete(slot)}">
                  {{ getMealSelectedCount(slot) }}/{{ getMealTotalCount(slot) }}
                </span>
              </div>
              <div class="flex flex-wrap gap-1.5">
                <div *ngFor="let item of getSelectionsForMeal(slot.key)"
                     class="flex items-center gap-1.5 bg-gray-900 px-2 py-1 rounded-lg text-xs">
                  <span class="text-base">{{ item.emoji }}</span>
                  <span class="text-gray-300">{{ item.foodName }}</span>
                </div>
                <p *ngIf="getSelectionsForMeal(slot.key).length === 0" class="text-xs text-gray-600 italic">Sin selección</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .scrollbar-hide { scrollbar-width: none; }
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class NutritionComponent implements OnInit {
  mealSlots: MealSlot[] = [];
  foodOptions: { [grupo: string]: FoodItem[] } = {};
  // Stored as array of food names (allows duplicates for multiple portions of same food)
  selections: { [key: string]: string[] } = {};
  groupSearch: { [grupo: string]: string } = {};
  activeMealIndex = 0;
  loading = true;
  showSummary = false;
  searchQuery = '';
  /** Filtro de subcategoría de proteína por grupo: 'all' | 'A' | 'B' | 'C' */
  proteinFilter: { [grupo: string]: 'all' | 'A' | 'B' | 'C' } = {};
  /** Grupos cuyo picker está forzado a expandirse aunque esté completo (clave: mealKey__grupo) */
  expandedPickers: { [key: string]: boolean } = {};

  private storageKey = 'ixololi_nutrition';

  constructor(private nutritionService: NutritionService) {}

  ngOnInit() {
    this.loadSelections();
    this.nutritionService.getMealPlan().subscribe(plan => {
      this.mealSlots = this.nutritionService.getMealSlots(plan);
      const planGroups = this.nutritionService.getPlanGroups(plan);
      this.nutritionService.getAllFoodGroups(planGroups).subscribe(groups => {
        this.foodOptions = groups;
        this.loading = false;
      });
    });
  }

  getMealIcon(key: string): string {
    const icons: { [k: string]: string } = {
      'desayuno': '🌅', 'comida': '☀️', 'colacion': '🍎', 'cena': '🌙'
    };
    return icons[key] || '🍽️';
  }

  getGroupIcon(grupo: string): string {
    const icons: { [k: string]: string } = {
      'Verduras': '🥦', 'Frutas': '🍓', 'Cereales sin grasa': '🌾',
      'Leguminosas': '🫘', 'Proteína muy baja en grasa': '🍗',
      'Proteína moderada en grasa': '🥩', 'Leche descremada': '🥛',
      'Grasas sin proteína': '🫒', 'Grasas con proteína': '🥜'
    };
    return icons[grupo] || '🍽️';
  }

  isProteinGroup(grupo: string): boolean {
    return this.nutritionService.isProteinGroup(grupo);
  }

  /** El picker se colapsa cuando el grupo está completo, a menos que el usuario lo expanda manualmente */
  isPickerCollapsed(mealKey: string, group: { grupo: string; portions: number }): boolean {
    const expandKey = `${mealKey}__${group.grupo}`;
    if (this.expandedPickers[expandKey]) return false;
    return this.isGroupComplete(mealKey, group);
  }

  expandPicker(mealKey: string, grupo: string) {
    this.expandedPickers[`${mealKey}__${grupo}`] = true;
  }

  getProteinFilter(grupo: string): 'all' | 'A' | 'B' | 'C' {
    return this.proteinFilter[grupo] || 'all';
  }

  getProteinCategoryLabel(cat?: string): string {
    if (cat === 'A') return 'Muy baja en grasa';
    if (cat === 'B') return 'Baja en grasa';
    if (cat === 'C') return 'Moderada en grasa';
    return '';
  }

  private getSelectionKey(mealKey: string, grupo: string): string {
    return `${mealKey}__${grupo}`;
  }

  getMaxPortions(portions: number): number {
    return Math.ceil(portions);
  }

  getFilteredFoods(grupo: string): FoodItem[] {
    let all = this.foodOptions[grupo] || [];

    // Aplicar filtro de subcategoría para proteínas
    if (this.isProteinGroup(grupo)) {
      const filter = this.getProteinFilter(grupo);
      if (filter !== 'all') {
        all = all.filter(f => f.proteinCategory === filter);
      }
    }

    const q = (this.groupSearch[grupo] || '').toLowerCase().trim();
    if (!q) return all;
    return all.filter(f => f.name.toLowerCase().includes(q));
  }

  // Returns array of size getMaxPortions, with FoodItem or null in each slot
  getPortionSlots(mealKey: string, group: { grupo: string; portions: number }): (SelectedItem | null)[] {
    const max = this.getMaxPortions(group.portions);
    const key = this.getSelectionKey(mealKey, group.grupo);
    const selected = this.selections[key] || [];
    const slots: (SelectedItem | null)[] = [];
    for (let i = 0; i < max; i++) {
      if (i < selected.length) {
        const foodName = selected[i];
        const food = (this.foodOptions[group.grupo] || []).find(f => f.name === foodName);
        slots.push({
          foodName,
          emoji: food?.emoji || '🍽️',
          portion: food?.portion || '',
          grupo: group.grupo
        });
      } else {
        slots.push(null);
      }
    }
    return slots;
  }

  getSelectionsForGroup(mealKey: string, grupo: string): SelectedItem[] {
    const key = this.getSelectionKey(mealKey, grupo);
    const selected = this.selections[key] || [];
    return selected.map(foodName => {
      const food = (this.foodOptions[grupo] || []).find(f => f.name === foodName);
      return {
        foodName,
        emoji: food?.emoji || '🍽️',
        portion: food?.portion || '',
        grupo
      };
    });
  }

  getSelectionsForMeal(mealKey: string): SelectedItem[] {
    const result: SelectedItem[] = [];
    for (const fullKey of Object.keys(this.selections)) {
      if (!fullKey.startsWith(mealKey + '__')) continue;
      const grupo = fullKey.replace(mealKey + '__', '');
      result.push(...this.getSelectionsForGroup(mealKey, grupo));
    }
    return result;
  }

  getGroupSelectedCount(mealKey: string, group: { grupo: string; portions: number }): number {
    const key = this.getSelectionKey(mealKey, group.grupo);
    return (this.selections[key] || []).length;
  }

  isGroupComplete(mealKey: string, group: { grupo: string; portions: number }): boolean {
    return this.getGroupSelectedCount(mealKey, group) >= this.getMaxPortions(group.portions);
  }

  isGroupFull(mealKey: string, group: { grupo: string; portions: number }): boolean {
    return this.getGroupSelectedCount(mealKey, group) >= this.getMaxPortions(group.portions);
  }

  getFoodCountInGroup(mealKey: string, grupo: string, foodName: string): number {
    const key = this.getSelectionKey(mealKey, grupo);
    return (this.selections[key] || []).filter(n => n === foodName).length;
  }

  addToGroup(mealKey: string, grupo: string, food: FoodItem, maxPortions: number) {
    const key = this.getSelectionKey(mealKey, grupo);
    if (!this.selections[key]) this.selections[key] = [];
    const max = this.getMaxPortions(maxPortions);
    if (this.selections[key].length >= max) return;
    this.selections[key].push(food.name);
    this.saveSelections();

    // Al completar, colapsamos el picker (quitamos el flag de expansión manual)
    if (this.selections[key].length >= max) {
      delete this.expandedPickers[`${mealKey}__${grupo}`];
    }
  }

  removeFromGroup(mealKey: string, grupo: string, slotIndex: number) {
    const key = this.getSelectionKey(mealKey, grupo);
    if (!this.selections[key]) return;
    this.selections[key].splice(slotIndex, 1);
    if (this.selections[key].length === 0) delete this.selections[key];
    this.saveSelections();
  }

  clearMeal(slot: MealSlot) {
    for (const group of slot.groups) {
      const key = this.getSelectionKey(slot.key, group.grupo);
      delete this.selections[key];
    }
    this.saveSelections();
  }

  getMealSelectedCount(slot: MealSlot): number {
    let count = 0;
    for (const g of slot.groups) count += this.getGroupSelectedCount(slot.key, g);
    return count;
  }

  getMealTotalCount(slot: MealSlot): number {
    let total = 0;
    for (const g of slot.groups) total += this.getMaxPortions(g.portions);
    return total;
  }

  isMealComplete(slot: MealSlot): boolean {
    return this.getMealSelectedCount(slot) >= this.getMealTotalCount(slot) && this.getMealTotalCount(slot) > 0;
  }

  hasAnySelection(): boolean {
    return Object.values(this.selections).some(arr => arr.length > 0);
  }

  get totalSelected(): number {
    let total = 0;
    for (const slot of this.mealSlots) total += this.getMealSelectedCount(slot);
    return total;
  }

  get totalPortions(): number {
    let total = 0;
    for (const slot of this.mealSlots) total += this.getMealTotalCount(slot);
    return total;
  }

  private saveSelections() {
    const today = new Date();
    const dateKey = `${today.getFullYear()}_${today.getMonth()}_${today.getDate()}`;
    const data = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
    data[dateKey] = this.selections;
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  private loadSelections() {
    const today = new Date();
    const dateKey = `${today.getFullYear()}_${today.getMonth()}_${today.getDate()}`;
    const data = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
    this.selections = data[dateKey] || {};
  }
}
