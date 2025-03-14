import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = {
    email: '',
    password: '',
  };
  route = inject(Router);

  onLogin() {
    if (
      this.loginObj.email == 'ashanwithana4@gmail.com' &&
      this.loginObj.password == '1'
    ) {
      this.route.navigateByUrl('/master');
      localStorage.setItem('emperpUser', this.loginObj.email);
    }else{
      alert("Please provide the correct credentials to login")
    }
  }
}
