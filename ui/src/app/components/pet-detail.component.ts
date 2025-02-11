import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule
import { PetService, Pet } from '../services/pet.service';

@Component({
  selector: 'app-pet-detail',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ Add RouterModule here
  template: `
  <div class="container mt-4">
  <div class="card p-4">
    <h2>{{ pet?.name }} Details</h2>
    <p><strong>Type:</strong> {{ pet?.type }}</p>
    <p><strong>Age:</strong> {{ pet?.age }} years old</p>
    <div class="d-flex gap-2">
      <a routerLink="/" class="btn btn-outline-secondary">⬅️ Back to Pet List</a>
      <a [routerLink]="['/edit-pet', pet?.id]" class="btn btn-warning">✏️ Edit Pet</a>
    </div>
  </div>
</div>


  `,
  styles: [
    'h2 { color: #007bff; }',
    'button { background: #28a745; color: white; border: none; padding: 8px; cursor: pointer; margin-top: 10px; }'
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
