import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { UserCardComponent } from '../user-card/user-card.component';
import { User } from '../user.model';
import { UsersApiService } from '../users-api.service';

@Component({
  selector: 'wt-users-list',
  imports: [CommonModule, FormsModule, InputTextModule, UserCardComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent {
  users: User[] = [];
  usersFilter = '';

  constructor(private usersApiService: UsersApiService) {
    this.usersApiService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  onUsersFilterChange(value: string) {
    this.usersFilter = value;
    // GET users
  }
}
