import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PetService, Pet } from '../services/pet.service';

@Component({
  selector: 'app-pet-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container">
      <h2 class="text-primary">Pet List</h2>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Age</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let pet of pets">
            <td>
              <a [routerLink]="['/pet', pet.id]" class="text-decoration-none fw-bold text-primary">
                {{ pet.name }}
              </a>
            </td>
            <td>{{ pet.type }}</td>
            <td>{{ pet.age }} years old</td>
            <td class="text-center">
              <a [routerLink]="['/edit-pet', pet.id]" class="btn btn-outline-primary btn-sm me-2">
                <i class="bi bi-pencil"></i>
              </a>
              <button class="btn btn-outline-danger btn-sm" (click)="deletePet(pet.id)">
                <i class="bi bi-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <a routerLink="/edit-pet/new" class="btn btn-primary mt-3 d-flex align-items-center">
        <i class="bi bi-plus-lg me-2"></i> Add a Pet
      </a>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: auto;
      background: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    }
    h2 {
      margin-bottom: 20px;
    }
    table {
      background: white;
    }
    th {
      background: #007bff;
      color: white;
    }
  `]
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];

  constructor(private petService: PetService) {}

  ngOnInit() {
    this.loadPets();
  }

  loadPets() {
    this.petService.getPets().subscribe(data => this.pets = data);
  }

  editPet(id: number) {
    console.log(`Edit pet ${id}`); // Will be replaced with navigation logic
  }

  deletePet(id: number) {
    if (confirm("Are you sure you want to delete this pet?")) {
      this.petService.deletePet(id).subscribe(() => {
        this.pets = this.pets.filter(pet => pet.id !== id);
      });
    }
  }
}
