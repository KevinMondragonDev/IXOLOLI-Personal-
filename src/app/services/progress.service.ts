import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private getTodayKey(): string {
    const today = new Date();
    return `ixololi_${today.getFullYear()}_${today.getMonth()}_${today.getDate()}`;
  }

  saveProgress(category: string, id: string, completed: boolean) {
    const key = this.getTodayKey();
    let data = this.getTodayData();
    if (!data[category]) {
      data[category] = {};
    }
    data[category][id] = completed;
    localStorage.setItem(key, JSON.stringify(data));
  }

  getProgress(category: string, id: string): boolean {
    const data = this.getTodayData();
    return data[category]?.[id] || false;
  }

  private getTodayData(): any {
    const key = this.getTodayKey();
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : {};
  }
}
