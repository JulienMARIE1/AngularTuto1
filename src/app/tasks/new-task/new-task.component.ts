import { Component, Output, EventEmitter, signal, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input() userId!: string;
  @Output() close = new EventEmitter();
//  @Output() submit = new EventEmitter<NewTaskData>();
  newTaskTitle = signal(''); 
  newTaskSummary = ''; 
  newTaskDate = ''; 
  // Same to put it on constructor, just another way
  private tasksService = inject(TasksService);

  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask({title: this.newTaskTitle(), summary: this.newTaskSummary, date: this.newTaskDate}, this.userId);
    this.close.emit();
  }
}
