import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'ReAngular';
  description = 'ReAngular is a modular Single Page Application (SPA) built with Angular and Bootstrap. It uses client-side routing and a scalable architecture based on feature modules.';
}
