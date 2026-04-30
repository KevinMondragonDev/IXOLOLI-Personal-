import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient);

  getDieta(): Observable<any> {
    return this.http.get('/data/dieta.json');
  }

  getEntrenamiento(): Observable<any[]> {
    return this.http.get<any[]>('/data/entrenamiento.json');
  }

  getEstudio(): Observable<any[]> {
    return this.http.get<any[]>('/data/estudio.json');
  }
}
