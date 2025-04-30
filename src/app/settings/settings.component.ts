import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { UserSelectorComponent } from '../users/user-selector/user-selector.component';
import { User } from '../users/user.model';

@Component({
  selector: 'wt-settings',
  imports: [CommonModule, RouterModule, FormsModule, ButtonModule, UserSelectorComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  selectedUser: User | null = null;

  resetUser() {
    this.selectedUser = null;
  }
}
