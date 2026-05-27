import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';

export interface FoodItem {
  name: string;
  portion: string;
  emoji: string;
  /** Subcategoría de proteína: 'A' = muy baja, 'B' = baja, 'C' = moderada en grasa. Solo se asigna a proteínas */
  proteinCategory?: 'A' | 'B' | 'C';
  nutrients: { [key: string]: string };
}

export const FOOD_EMOJIS: { [key: string]: string } = {
  // Frutas
  'cereza': '🍒', 'fresa': '🍓', 'mandarina': '🍊', 'plátano': '🍌',
  'uvas': '🍇', 'pasas': '🍇', 'mango picado': '🥭', 'pera': '🍐',
  'piña picada': '🍍', 'arandanos': '🫐', 'guayaba': '🍈', 'melón picado': '🍈',
  'kiwi': '🥝', 'zarzamora': '🫐', 'naranja': '🍊', 'papaya picada': '🥭',
  'sandia picada': '🍉',
  // Verduras
  'acelgas cocidas': '🥬', 'betabel crudo': '🫜', 'brocoli cocido': '🥦',
  'cebolla blanca rebanada': '🧅', 'Cebolla morada rebanada': '🧅',
  'calabacita redonda cruda': '🥒', 'chay0te cocido': '🥒',
  'chile de arbol seco': '🌶️', 'chile habanero': '🌶️', 'chile jalapeño': '🌶️',
  'coliflor cocida': '🥦', 'col cocida picada': '🥬', 'espinaca cocida': '🥬',
  'jicama picada': '🥔', 'jitomate': '🍅', 'tomate': '🍅',
  'jugo de zanahoria': '🥕', 'lechuga': '🥬', 'nopal cocido': '🌵',
  'pepino con cascara rebanado': '🥒', 'pimiento fresco': '🫑',
  // Cereales
  'Elote amarrillo cocido': '🌽', 'Elote blanco cocido': '🌽',
  'Espaguetti cocido': '🍝', 'Pasta': '🍝', 'Maíz pozolero': '🌽',
  'Maíz palomero': '🍿', 'Pan de caja': '🍞', 'Pan molido': '🍞',
  'Papa cocida': '🥔', 'Arroz cocido': '🍚', 'Avena cocida': '🥣',
  'Avena en hojuelas': '🥣', 'Barrita de avena': '🍫', 'Bolillo': '🥖',
  'Bolillo integral': '🥖', 'Bolillo sin migajón': '🥖', 'Camote cocido': '🍠',
  'Cereal de arroz': '🥣', 'Cereal de arroz inflado con chocolate': '🥣',
  // Leguminosas
  'frijoles cocidos': '🫘', 'frijoles fritos': '🫘', 'lentejas cocidas': '🫘',
  'soya cocida': '🫛', 'garbanzo cocido': '🫛', 'haba seca cocida': '🫛',
  // Origen Animal A
  'Atún de agua drenado': '🐟', 'Atún fresco': '🐟', 'Bistec de res': '🥩',
  'Camarón cocido': '🦐', 'Camarón gigante': '🦐', 'Cangrejo': '🦀',
  'Cecina': '🥩', 'Charales secos': '🐟', 'Chuleta ahumada': '🥓',
  'Clara de huevo': '🥚', 'Filete de pescado': '🐟', 'Milanesa de pollo': '🍗',
  'Milanesa de res': '🥩', 'Pechuga de pollo sin piel aplanada': '🍗',
  'Molida de pollo': '🍗', 'Queso mozzarella cero grasa': '🧀',
  'Queso cottage': '🧀', 'Requesón promedio': '🧀',
  // Origen Animal B
  'Arrachera cocida': '🥩', 'Bistec de ternera': '🥩',
  'Carne molida de cerdo': '🥩', 'carne de cerdo': '🥩',
  'Hígado de cerdo cocido': '🥩', 'Jamón de pavo': '🥓',
  'Milanesa de cerdo': '🥩', 'Pescado blanco': '🐟', 'Queso fresco': '🧀',
  'Queso Oaxaca lala light': '🧀', 'Queso panela': '🧀',
  // Origen Animal C
  'Bistec de bola': '🥩', 'Carne deshebrada': '🥩', 'Chicharrón de cerdo': '🥓',
  'Huevo fresco': '🥚', 'Longaniza de primera': '🌭', 'Salchicha de pavo': '🌭',
  // Lácteos
  'leche lala light': '🥛', 'leche descremada': '🥛',
  'leche evaporada descremada': '🥛', 'leche alpura light extra': '🥛',
  'yogurt light de fruta': '🥣', 'yogurt lala light batido': '🥣',
  'leche light extra': '🥛',
  // Grasas con proteína
  'almendras': '🌰', 'cacahuate': '🥜', 'chia': '🌱', 'chorizo': '🌭',
  'nuez': '🌰', 'Crema de cacahuate': '🥜', 'queso de puerco': '🧀',
  'pistache 18': '🥜',
  // Grasas sin proteína
  'Aceite': '🫗', 'Aderezo': '🥗', 'Aguacate mediano': '🥑',
  'Coco rallado': '🥥', 'Crema agria': '🥛', 'Crema natural': '🥛',
  'manteca de cerdo': '🧈', 'mantequilla': '🧈', 'margarina': '🧈',
  'mayonesa': '🥚', 'tocino': '🥓'
};

export interface FoodGroup {
  groupName: string;
  csvFile: string;
  items: FoodItem[];
}

export interface MealPlanRow {
  grupo: string;
  porcionesTotales: number;
  desayuno: number;
  comida: number;
  colacion: number;
  cena: number;
}

export interface MealSlot {
  name: string;
  key: 'desayuno' | 'comida' | 'colacion' | 'cena';
  time: string;
  /** Grupos requeridos según el plan (portions > 0) */
  groups: { grupo: string; portions: number }[];
}

@Injectable({
  providedIn: 'root'
})
export class NutritionService {
  private http = inject(HttpClient);

  // Para grupos no-proteína, mapeo directo grupo → archivo.
  // Las proteínas (A/B/C) se manejan especialmente: ambos grupos del plan ofrecen los 3 tipos.
  private groupToFiles: { [key: string]: string[] } = {
    'Verduras': ['Plan_Alimentacion - Verduras.csv'],
    'Frutas': ['Plan_Alimentacion - Frutas.csv'],
    'Cereales sin grasa': ['Plan_Alimentacion - Cereales.csv'],
    'Leguminosas': ['Plan_Alimentacion - Leguminosas.csv'],
    'Leche descremada': ['Plan_Alimentacion - Lacteos.csv'],
    'Grasas sin proteína': ['Plan_Alimentacion - Aceites y grasas sin prot.csv'],
    'Grasas con proteína': ['Plan_Alimentacion - Aceites y grasas con prot.csv']
  };

  private proteinFiles: { category: 'A' | 'B' | 'C'; file: string }[] = [
    { category: 'A', file: 'Plan_Alimentacion - Origen Animal A.csv' },
    { category: 'B', file: 'Plan_Alimentacion - Origen Animal B.csv' },
    { category: 'C', file: 'Plan_Alimentacion - Origen Animal C.csv' }
  ];

  /** Determina si un grupo es de proteínas animales */
  isProteinGroup(grupo: string): boolean {
    return grupo.toLowerCase().startsWith('proteína');
  }

  getMealPlan(): Observable<MealPlanRow[]> {
    return this.http.get('/data/KevinMondragon_plan_alimenticio - KevinMondragon_plan_alimenticio.csv.csv', { responseType: 'text' })
      .pipe(map(csv => this.parseMealPlan(csv)));
  }

  getFoodOptions(grupo: string): Observable<FoodItem[]> {
    if (this.isProteinGroup(grupo)) {
      // Las proteínas siempre cargan A+B+C, etiquetando cada item con su categoría
      const requests = this.proteinFiles.map(({ category, file }) =>
        this.http.get(`/data/DataDeTiposAlimentos/${file}`, { responseType: 'text' })
          .pipe(map(csv => this.parseFoodCsv(csv).map(item => ({ ...item, proteinCategory: category }))))
      );
      return forkJoin(requests).pipe(map(results => results.flat()));
    }
    const files = this.groupToFiles[grupo];
    if (!files || files.length === 0) return new Observable(sub => { sub.next([]); sub.complete(); });
    const requests = files.map(file =>
      this.http.get(`/data/DataDeTiposAlimentos/${file}`, { responseType: 'text' })
        .pipe(map(csv => this.parseFoodCsv(csv)))
    );
    return forkJoin(requests).pipe(map(results => results.flat()));
  }

  /** Carga todos los grupos que aparecen en el plan del usuario */
  getAllFoodGroups(planGroups: string[]): Observable<{ [grupo: string]: FoodItem[] }> {
    const requests: { [key: string]: Observable<FoodItem[]> } = {};
    for (const grupo of planGroups) {
      requests[grupo] = this.getFoodOptions(grupo);
    }
    return forkJoin(requests);
  }

  getMealSlots(plan: MealPlanRow[]): MealSlot[] {
    const slots: MealSlot[] = [
      { name: 'Desayuno', key: 'desayuno', time: '9:00 am', groups: [] },
      { name: 'Comida', key: 'comida', time: '2:00 pm', groups: [] },
      { name: 'Colación', key: 'colacion', time: '5:00 pm', groups: [] },
      { name: 'Cena', key: 'cena', time: '8:00 pm', groups: [] }
    ];

    for (const row of plan) {
      for (const slot of slots) {
        const portions = row[slot.key];
        if (portions > 0) {
          slot.groups.push({ grupo: row.grupo, portions });
        }
      }
    }

    return slots;
  }

  /** Devuelve la lista de grupos únicos que aparecen en el plan */
  getPlanGroups(plan: MealPlanRow[]): string[] {
    return [...new Set(plan.map(p => p.grupo))];
  }

  private parseMealPlan(csv: string): MealPlanRow[] {
    const lines = csv.trim().split('\n');
    const rows: MealPlanRow[] = [];
    for (let i = 1; i < lines.length; i++) {
      const cols = lines[i].split(',');
      if (cols.length < 6) continue;
      rows.push({
        grupo: cols[0].trim(),
        porcionesTotales: parseFloat(cols[1]) || 0,
        desayuno: parseFloat(cols[2]) || 0,
        comida: parseFloat(cols[3]) || 0,
        colacion: parseFloat(cols[4]) || 0,
        cena: parseFloat(cols[5]) || 0
      });
    }
    return rows;
  }

  private parseFoodCsv(csv: string): FoodItem[] {
    const lines = csv.trim().split('\n');
    if (lines.length < 2) return [];
    const headers = lines[0].split(',').map(h => h.trim());
    const items: FoodItem[] = [];

    for (let i = 1; i < lines.length; i++) {
      const cols = lines[i].split(',').map(c => c.trim());
      if (cols.length < 2) continue;
      const nutrients: { [key: string]: string } = {};
      for (let j = 2; j < headers.length; j++) {
        if (cols[j]) nutrients[headers[j]] = cols[j];
      }
      items.push({
        name: cols[0],
        portion: cols[1],
        emoji: FOOD_EMOJIS[cols[0]] || '🍽️',
        nutrients
      });
    }
    return items;
  }
}
