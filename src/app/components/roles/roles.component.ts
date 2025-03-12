import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent {
  firstName: string = 'John';
  lastName: string = 'Doe';
  age: number = 30;
  is_active: boolean = false;
  currentDate: Date = new Date();
  inputType: string = 'checkbox';
  selectedState: string = '';

  showWelcomeAlert() {
    alert('Welcome to Angular 19');
  }
  showMessage(message: string) {
    alert(message);
  }
}
