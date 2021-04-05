import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss'],
})
export class UserNewComponent implements OnInit {
  roles: string[] = environment.roles;
  userForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private userService: UserService
  ) {
    this.userForm = this.formBuilder.group({
      email: [''],
      password: [''],
      first_name: [''],
      last_name: [''],
      office_id: [''],
      position_id: [''],
      roles: [''],
    });
  }

  ngOnInit(): void { }

  onSubmit(): any {
    this.userService.createUser(this.userForm.value).subscribe(
      () => {
        this.ngZone.run(() => this.router.navigateByUrl('/users'));
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
