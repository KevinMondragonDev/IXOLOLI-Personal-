import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private getTodayKey(): string {
    const today = new Date();
    return `ixololi_${today.getFullYear()}_${today.getMonth()}_${today.getDate()}`;
  }

  private getKeyForCategory(category: string): string {
    if (category.startsWith('study_')) {
      return 'ixololi_study_progress';
    }
    return this.getTodayKey();
  }

  saveUnlock(category: string, id: string) {
    const key = 'ixololi_study_unlocks';
    const data = this.getData(key);
    if (!data[category]) data[category] = {};
    data[category][id] = true;
    localStorage.setItem(key, JSON.stringify(data));
  }

  getUnlock(category: string, id: string): boolean {
    const key = 'ixololi_study_unlocks';
    const data = this.getData(key);
    return data[category]?.[id] || false;
  }

  saveProgress(category: string, id: string, completed: boolean) {
    const key = this.getKeyForCategory(category);
    let data = this.getData(key);
    if (!data[category]) {
      data[category] = {};
    }
    data[category][id] = completed;
    localStorage.setItem(key, JSON.stringify(data));
  }

  getProgress(category: string, id: string): boolean {
    const key = this.getKeyForCategory(category);
    const data = this.getData(key);
    return data[category]?.[id] || false;
  }

  private getData(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : {};
  }

  isTrainingCompletedForDate(date: Date, expectedCount: number): boolean {
    const key = `ixololi_${date.getFullYear()}_${date.getMonth()}_${date.getDate()}`;
    const data = this.getData(key);
    if (!data['training']) return false;
    let completedCount = 0;
    for (let i = 0; i < expectedCount; i++) {
      if (data['training'][`ex_${i}`]) completedCount++;
    }
    return completedCount === expectedCount;
  }

  isTrainingDebtCompletedToday(dayName: string, expectedCount: number): boolean {
    const key = this.getTodayKey();
    const data = this.getData(key);
    const cat = `training_${dayName}`;
    if (!data[cat]) return false;
    let completedCount = 0;
    for (let i = 0; i < expectedCount; i++) {
      if (data[cat][`ex_${i}`]) completedCount++;
    }
    return completedCount === expectedCount;
  }


  getDeathStreak(): number {
    const data = localStorage.getItem('ixololi_death_streak_count');
    return data ? parseInt(data, 10) : 0;
  }

  setDeathStreakForToday(completed: boolean) {
    const today = this.getTodayKey();
    const lastDate = localStorage.getItem('ixololi_last_death_streak_date');
    let current = this.getDeathStreak();

    if (completed && lastDate !== today) {
      localStorage.setItem('ixololi_death_streak_count', (current + 1).toString());
      localStorage.setItem('ixololi_last_death_streak_date', today);
    } else if (!completed && lastDate === today) {
      localStorage.setItem('ixololi_death_streak_count', Math.max(0, current - 1).toString());
      localStorage.removeItem('ixololi_last_death_streak_date');
    }
  }
  getSerenityStreak(): number {
    const data = localStorage.getItem('ixololi_serenity_streak_count');
    return data ? parseInt(data, 10) : 0;
  }

  setSerenityStreakForToday(completed: boolean) {
    const today = this.getTodayKey();
    const lastDate = localStorage.getItem('ixololi_last_serenity_streak_date');
    let current = this.getSerenityStreak();

    if (completed && lastDate !== today) {
      localStorage.setItem('ixololi_serenity_streak_count', (current + 1).toString());
      localStorage.setItem('ixololi_last_serenity_streak_date', today);
    } else if (!completed && lastDate === today) {
      localStorage.setItem('ixololi_serenity_streak_count', Math.max(0, current - 1).toString());
      localStorage.removeItem('ixololi_last_serenity_streak_date');
    }
  }

  getStudyStreak(): number {
    const data = localStorage.getItem('ixololi_study_progress');
    if (!data) return 0;
    try {
      const parsed = JSON.parse(data);
      let count = 0;
      for (const cat in parsed) {
        for (const id in parsed[cat]) {
          if (parsed[cat][id]) count++;
        }
      }
      return count;
    } catch {
      return 0;
    }
  }

  exportProgressToCSV() {
    const csvRows = [];
    // Header
    csvRows.push(['Fecha_Dato', 'Modulo', 'Tipo_Actividad', 'Identificador', 'Estado_Valor'].join(','));

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith('ixololi_')) continue;

      const value = localStorage.getItem(key);
      if (!value) continue;

      if (key === 'ixololi_study_progress') {
        const data = JSON.parse(value);
        for (const [category, tasks] of Object.entries(data)) {
          for (const [taskId, completed] of Object.entries(tasks as any)) {
            csvRows.push([`Global`, 'Estudio', category, taskId, completed ? 'Completado' : 'Pendiente'].join(','));
          }
        }
      } else if (key.match(/^ixololi_\d{4}_\d{1,2}_\d{1,2}$/)) {
        // Daily progress
        const dateStr = key.replace('ixololi_', '').replace(/_/g, '/');
        const data = JSON.parse(value);
        for (const [category, items] of Object.entries(data)) {
          for (const [itemId, completed] of Object.entries(items as any)) {
            csvRows.push([dateStr, category === 'training' ? 'Entrenamiento' : 'Habitos', category, itemId, completed ? 'Completado' : 'Pendiente'].join(','));
          }
        }
      } else if (key.includes('streak_count')) {
        const type = key.includes('death') ? 'Entrenamiento' : 'Habitos';
        csvRows.push([`Global`, type, 'Racha_Historica', key, value].join(','));
      }
    }

    const csvContent = "data:text/csv;charset=utf-8," + csvRows.join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `ixololi_progreso_${new Date().getTime()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
