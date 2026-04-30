import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { StudyComponent } from './components/study/study.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'grocery', component: GroceryComponent },
  { path: 'study', component: StudyComponent },
  { path: '**', redirectTo: '' }
];
