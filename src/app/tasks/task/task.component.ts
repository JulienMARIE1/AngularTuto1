import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task !: Task;
  //@Output() close = new EventEmitter()
  private tasksService = inject(TasksService);
  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
    //this.close.emit()
  }

}
