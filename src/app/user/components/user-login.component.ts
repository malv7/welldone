import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from "../user.service";

@Component({
  selector: 'login',
  template: `
  
    
    <form [formGroup]="form">
      <div class="c">
        <div>Email</div>
        <input type="email" formControlName="email">
        <div>Password (6+)</div>
        <input type="password" formControlName="password">
        <div class="b" *ngIf="form.valid">
          <button (click)="register()">Register</button>
          <button (click)="login()">Login</button>
          <button (click)="logout()">logout</button>
          <button (click)="resetPassword()">reset</button>
        </div>
      </div>
    </form>

  `,
  styles: [`
    :host {
      display: flex;
      width: 100vw;
      height: 100vh;
      justify-content: center;
      align-items: center;
    }
    .c {
      margin-bottom: 200px;
    }
    div {
      font-size: 0.9em;
    }
    button {
      background: white;
      border: 1px solid black;
      padding: 0.3em;
      font-size: 0.9em;
    }
    input {
      font-size: 0.9em;
      margin-bottom: 10px;
    }
    .min {
      font-size: 0.8em;
    }
  `]
})
export class LoginComponent {

  form = new FormGroup({
    email:    new FormControl('', [validateEmail]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private userService: UserService) {
    
  }

  login(): void {
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;
    this.userService.login(email, password);
  }

  register(): void {
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;
    this.userService.register(email, password);
  }

  logout(): void {
    this.userService.logout();
  }

  resetPassword(): void {
    const email = this.form.get('email').value;
    this.userService.resetPassword(email);
  }

}

function validateEmail(c: FormControl) {
  // extraordinary email regex
  let EMAIL_REGEXP =
    new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  return EMAIL_REGEXP.test(c.value) ? null : {
    validateEmail: {
      valid: false
    }
  }
}

