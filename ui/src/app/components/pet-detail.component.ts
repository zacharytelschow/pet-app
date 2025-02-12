import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PetService, Pet } from '../services/pet.service';

@Component({
  selector: 'app-pet-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mt-5 d-flex justify-content-center">
      <div class="card shadow-lg p-4" style="max-width: 500px; width: 100%;">
        <h2 class="text-primary text-center">{{ pet?.name }} Details</h2>
        <hr />
        <p><strong>Type:</strong> {{ pet?.type }}</p>
        <p><strong>Age:</strong> {{ pet?.age }} years old</p>
        <div class="d-flex justify-content-between mt-4">
          <a routerLink="/" class="btn btn-outline-secondary">
            <i class="fas fa-arrow-left"></i> Back to Pet List
          </a>
          <a [routerLink]="['/edit-pet', pet?.id]" class="btn btn-warning">
            <i class="fas fa-edit"></i> Edit Pet
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        background: #f8f9fa;
        border-radius: 10px;
      }
      h2 {
        font-weight: bold;
      }
      p {
        font-size: 1.1rem;
      }
    `
  ]
})
export class PetDetailComponent implements OnInit {
  pet: Pet | undefined;

  constructor(private route: ActivatedRoute, private petService: PetService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.petService.getPetById(id).subscribe(data => this.pet = data);
  }
}
