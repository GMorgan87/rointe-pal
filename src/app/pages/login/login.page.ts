import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from "@ionic/angular/standalone";
import { RointeService } from 'src/app/services/rointe.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, ReactiveFormsModule]
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private RointeService: RointeService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.RointeService.initialise('gmorgan87@hotmail.co.uk', '0770I0i949i/R').then(res => {
      this.router.navigateByUrl('/installations', { replaceUrl: true });
    })
  }


  async onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      await this.RointeService.initialise(email, password)
      // TODO: Call authentication service
      this.router.navigateByUrl('/installations', { replaceUrl: true });
    }
  }
}
