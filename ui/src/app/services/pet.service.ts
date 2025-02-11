import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pet {
  id: number;
  name: string;
  type: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private apiUrl = 'http://localhost:5001/pet';

  constructor(private http: HttpClient) {}

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.apiUrl);
  }
  getPetById(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.apiUrl}/${id}`);
  }
  addPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.apiUrl, pet);
  }
  updatePet(pet: Pet): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${pet.id}`, pet);
  }
  
}
