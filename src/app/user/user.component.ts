import { Component, Input, input, Output, computed, EventEmitter, output/*signal*/ } from '@angular/core';
import { User } from './user.model';

// Both are same
//type User = {id :string, avatar: string, name: string};
//interface User {id :string, avatar: string, name: string}

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //@Input({required : true}) avatar!: string;
  //@Input({required : true}) name!: string;
  /*avatar = input.required<string>();
  id = input.required<string>();
  name = input.required<string>();*/
  @Input() user!: User;
  @Input() isSelected!: boolean;
  imagePath = computed (() => 'assets/users/' + this.user.avatar);
  select = output<string>();
  //@Output() select = new EventEmitter();
  //selectedUser = signal(DUMMY_USERS[randomIndex]) ;
  //imagePath = computed (() => 'assets/users/' + this.selectedUser().avatar);
  /*get imagePath(){
    return 'assets/users/' + this.selectedUser.avatar;
  }*/
  /*get imagePath(){
    return 'assets/users/' + this.avatar;
  }*/
  onSelectUser(){
    //this.selectedUser.set(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]);
    this.select.emit(this.user.id);
  }
}
