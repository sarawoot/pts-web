import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  Users: any = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res) => {
      this.Users = res;
    });
  }

  deleteUser(id: any, i: number): void {
    if (window.confirm('คุณต้องการลบใช่หรือไม่?')) {
      this.userService.deleteUser(id).subscribe((res) => {
        this.Users.splice(i, 1);
      });
    }
  }
}
