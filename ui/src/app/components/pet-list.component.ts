import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PetService, Pet } from '../services/pet.service';

@Component({
    selector: 'app-pet-list',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
    <div class="container mt-4">
    <h2>Pet List</h2>
    <ul class="list-group">
      <li *ngFor="let pet of pets" class="list-group-item d-flex justify-content-between align-items-center">
        <a [routerLink]="['/pet', pet.id]" class="fw-bold">
          {{ pet.name }}
          <span class="text-muted">({{ pet.type }}, {{ pet.age }} years old)</span>
        </a>
      </li>
    </ul>
    <a routerLink="/add-pet" class="btn btn-primary mt-3">➕ Add a Pet</a>
  </div>
  
    `,
    styles: ['h2 { color: #007bff; }']
  })

export class PetListComponent implements OnInit {
  pets: Pet[] = [];

  constructor(private petService: PetService) {}

  ngOnInit() {
    this.petService.getPets().subscribe(data => this.pets = data);
  }
}
