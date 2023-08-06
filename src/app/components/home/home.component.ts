import { Component } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  users: User[] = [];

  constructor(private userService: UserService) { 
    this.userService.getAll()
      .subscribe({
        next: (users) => {
          this.users = users;
        },
        error: (e) => console.error(e)
      });
  }

}
