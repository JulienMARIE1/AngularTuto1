import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { TasksService } from './tasks.service';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() nameUser?: string;
  @Input() id!: string;
  isAddingTask = false;
  //Dependancy injection, create the member
  constructor(private tasksService: TasksService){
    
  }

  get selectedUserTask(){
    return this.tasksService.getUserTasks(this.id);
  }

  onAddTask(){
      this.isAddingTask = true;
  }
  /*onComplete(id: string){
    this.tasksService.removeTask(id);
  }*/

  onCancel(){
    this.isAddingTask = false;
  }

  onSubmit(newTask:NewTaskData){
    this.tasksService.addTask(newTask, this.id);
    this.isAddingTask = false;
  }
}
