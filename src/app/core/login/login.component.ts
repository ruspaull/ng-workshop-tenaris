import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'wt-login',
  imports: [ReactiveFormsModule, InputText, PasswordModule, ButtonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', { validators: [Validators.required] }),
    password: new FormControl('', { validators: [Validators.required] }),
  });

  value = null;

  private authService = inject(AuthService);
  private router = inject(Router)

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }

    const { email, password } = this.loginForm.value;
    this.authService.login(email!, password!);
    this.router.navigate(['/dashboard']);
  }
}
