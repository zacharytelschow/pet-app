import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PetListComponent } from './components/pet-list.component';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Ensure this is set
  templateUrl: './app.component.html',
  imports: [RouterOutlet, PetListComponent] // ✅ Import RouterOutlet
})
export class AppComponent {}
