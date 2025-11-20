import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Auth as AuthService } from './services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MesProduits');

constructor(public authService: AuthService)
{}

onLogout(){
  (this.authService as any).logout?.();
  }
}