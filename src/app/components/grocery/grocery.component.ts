import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-gray-950 text-gray-100 font-sans p-4 md:p-8">
      <div class="max-w-4xl mx-auto space-y-8">
        <!-- Header -->
        <header class="flex justify-between items-center border-b border-gray-800 pb-6">
          <div>
            <h1 class="text-3xl font-bold text-white flex items-center gap-3">
              <svg class="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              Lista del Súper
            </h1>
            <p class="text-gray-400 mt-2">Aprox. 600 - 700 MXN para tu semana.</p>
          </div>
          <a routerLink="/" class="px-4 py-2 bg-gray-900 border border-gray-800 hover:bg-gray-800 rounded-lg text-sm transition-colors text-gray-300 flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            Volver
          </a>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div *ngFor="let cat of groceryList" class="bg-gray-900/50 border border-gray-800 rounded-xl p-5 backdrop-blur-sm">
            <h2 class="text-xl font-semibold text-emerald-400 mb-4">{{ cat.category }}</h2>
            <ul class="space-y-3">
              <li *ngFor="let item of cat.items" class="flex items-start gap-3">
                <div class="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></div>
                <span class="text-gray-300 leading-relaxed">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
})
export class GroceryComponent implements OnInit {
  groceryList: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getDieta().subscribe(data => {
      this.groceryList = data.super;
    });
  }
}
