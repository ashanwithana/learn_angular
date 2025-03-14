import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  route = inject(Router);

  onLogout() {
    this.route.navigateByUrl('/login');
    localStorage.removeItem('emperpUser');
  }
}
