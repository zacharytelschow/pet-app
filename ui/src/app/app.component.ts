import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Ensure this is set
  templateUrl: './app.component.html',
  imports: [RouterOutlet] // ✅ Import RouterOutlet
})
export class AppComponent {}
