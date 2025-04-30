import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { User } from '../user.model';
import { UsersApiService } from '../users-api.service';

@Component({
  selector: 'wt-user-selector',
  imports: [CommonModule, SelectModule, FormsModule],
  templateUrl: './user-selector.component.html',
  styleUrl: './user-selector.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: UserSelectorComponent,
    },
  ],
})
export class UserSelectorComponent implements ControlValueAccessor, OnInit {
  selectedUser: User | null = null;
  users: User[] = [];
  disabled = false;

  // @Output()
  private onChange!: (user: User) => void;
  private onTouched!: () => void;

  private usersApiService = inject(UsersApiService);

  ngOnInit() {
    this.usersApiService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  // @Input()
  writeValue(user: User) {
    this.selectedUser = user;
  }

  registerOnChange(fn: (user: User) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  onSelectedUserChange(user: User) {
    this.selectedUser = user;
    this.onChange(user);
    this.onTouched();
  }
}
