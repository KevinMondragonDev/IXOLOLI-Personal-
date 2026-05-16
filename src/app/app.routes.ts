import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudyComponent } from './components/study/study.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'study', component: StudyComponent },
  { path: '**', redirectTo: '' }
];
