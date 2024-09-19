import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { NgFor } from '@angular/common';

interface User {id :string, avatar: string, name: string}

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser?: User;
  
  onSelectUser(id: string){
    console.log(id);

    this.selectedUser = this.users.find(u => u.id == id);
  }
}
