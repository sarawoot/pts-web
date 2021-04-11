import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { AuthenService } from '../../services/authen.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoginFail = false;
  errorMessage = '';

  constructor(
    public formBuilder: FormBuilder,
    public toster: ToastrService,
    private authenService: AuthenService,
    private tokenStorage: TokenStorageService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
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
        this.toster.error('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
        console.log(err);
      }
    );
  }
}
