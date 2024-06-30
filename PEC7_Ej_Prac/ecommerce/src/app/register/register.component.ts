import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})

export class RegisterComponent {

  username: string = '';
  password: string = '';
  registerForm: any;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  register(): void {
    const { username } = this.registerForm;
    if (this.authService.register(username)) {
      this.router.navigate(['/article']);
    } 
  }
}
