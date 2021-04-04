import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  id: any;
  roles: string[] = environment.roles;
  userForm!: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.userService.getUser(this.id).subscribe((res) => {
      this.userForm.setValue({
        email: res.email,
        first_name: res.first_name,
        last_name: res.last_name,
        office_id: res.office_id,
        position_id: res.position_id,
        roles: res.roles,
      });
    });

    this.userForm = this.formBuilder.group({
      email: [''],
      first_name: [''],
      last_name: [''],
      office_id: [''],
      position_id: [''],
      roles: [''],
    });
  }

  ngOnInit(): void {}

  onUpdate(): any {
    this.userService.updateUser(this.id, this.userForm.value).subscribe(
      () => {
        this.ngZone.run(() => {
          this.router.navigateByUrl('/users');
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
