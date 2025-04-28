import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Observable } from 'rxjs';
import { UserCardComponent } from '../user-card/user-card.component';
import { User } from '../user.model';
import { UsersApiService } from '../users-api.service';

@Component({
  selector: 'wt-users-list',
  imports: [CommonModule, ButtonModule, UserCardComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent {
  isLoading = true;
  users$: Observable<User[]>;
  users2: User[] = [];

  @HostListener('window:scroll', ['$event'])
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onScroll() {}

  private counter = 0;

  constructor(private usersApiService: UsersApiService) {
    this.users$ = this.usersApiService.getUsers();
    this.loadData();
  }

  buttonClickHandler() {
    console.log('Button clicked!');
  }

  private async loadData() {
    try {
      this.isLoading = true;
      const users = await this.usersApiService.getUsersPromise();
      this.users2 = users;
    } finally {
      this.isLoading = false;
    }
  }
}
