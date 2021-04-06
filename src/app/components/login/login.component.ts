import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import jwt_decode from 'jwt-decode';

import { environment } from 'src/environments/environment';

import { AuthenService } from '../../services/authen.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoginFail = false;
  errorMessage = '';

  constructor(public formBuilder: FormBuilder, private authenService: AuthenService, private tokenStorage: TokenStorageService) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.authenService.login(this.loginForm.value).subscribe(
      (res: any) => {
        const token = res.token;
        const user = jwt_decode(token);
        this.tokenStorage.saveToken(token);
        this.tokenStorage.saveUser(user);
        window.location.pathname = environment.homePath;
      },
      (err) => {
        this.isLoginFail = true;
        this.errorMessage = 'อีเมลหรือรหัสผ่านไม่ถูกต้อง';
        console.log(err);
      }
    );
  }
}
