import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PetService, Pet } from '../services/pet.service';

@Component({
  selector: 'app-pet-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // ✅ Import necessary modules
  template: `
    <h2>{{ isEditMode ? 'Edit Pet' : 'Add Pet' }}</h2>
    
    <form (ngSubmit)="savePet()">
      <label>
        Name:
        <input type="text" [(ngModel)]="pet.name" name="name" required />
      </label>
      <br />

      <label>
        Type:
        <input type="text" [(ngModel)]="pet.type" name="type" required />
      </label>
      <br />

      <label>
        Age:
        <input type="number" [(ngModel)]="pet.age" name="age" required />
      </label>
      <br />

      <button type="submit">{{ isEditMode ? 'Update' : 'Add' }} Pet</button>
    </form>

    <br />
    <a routerLink="/">⬅️ Back to Pet List</a>
  `,
  styles: [
    `h2 { color: #007bff; }`,
    `form { display: flex; flex-direction: column; gap: 8px; max-width: 300px; }`,
    `input { padding: 6px; font-size: 16px; }`,
    `button { background: #007bff; color: white; border: none; padding: 8px; cursor: pointer; }`
  ]
})
export class PetFormComponent implements OnInit {
  pet: Pet = { id: 0, name: '', type: '', age: 0 };
  isEditMode = false;

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.isEditMode = true;
      this.petService.getPetById(id).subscribe(data => (this.pet = data));
    }
  }

  savePet() {
    if (this.isEditMode) {
      this.petService.updatePet(this.pet).subscribe(() => this.router.navigate(['/']));
    } else {
      this.petService.addPet(this.pet).subscribe(() => this.router.navigate(['/']));
    }
  }
}
