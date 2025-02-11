import { Routes } from '@angular/router';
import { PetListComponent } from './components/pet-list.component';
import { PetDetailComponent } from './components/pet-detail.component';
import { PetFormComponent } from './components/pet-form.component';

export const routes: Routes = [
  { path: '', component: PetListComponent },
  { path: 'pet/:id', component: PetDetailComponent }, // ✅ Ensure pet detail route exists
  { path: 'add-pet', component: PetFormComponent },
  { path: 'edit-pet/:id', component: PetFormComponent },
];
