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
    <div class="container">
      <h2 class="text-primary">{{ isEditMode ? 'Edit Pet' : 'Add a New Pet' }}</h2>
      
      <form (ngSubmit)="savePet()" class="form">
        <div class="mb-3">
          <label class="form-label">Name:</label>
          <input class="form-control" type="text" [(ngModel)]="pet.name" name="name" required />
        </div>

        <div class="mb-3">
          <label class="form-label">Type:</label>
          <input class="form-control" type="text" [(ngModel)]="pet.type" name="type" required />
        </div>

        <div class="mb-3">
          <label class="form-label">Age:</label>
          <input class="form-control" type="number" [(ngModel)]="pet.age" name="age" required />
        </div>

        <div class="d-flex gap-2">
          <button type="submit" class="btn btn-primary">
            <i class="bi bi-save"></i> {{ isEditMode ? 'Update' : 'Add' }} Pet
          </button>
          <a routerLink="/" class="btn btn-secondary">
            <i class="bi bi-arrow-left"></i> Back to Pet List
          </a>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    }
    h2 {
      margin-bottom: 20px;
    }
    .form-label {
      font-weight: bold;
    }
    button {
      min-width: 150px;
    }
  `]
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
