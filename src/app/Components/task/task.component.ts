import { Component, OnInit,Input } from '@angular/core';
import { Task } from '../../Models/Task';
import { TaskService } from '../../Services/task.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
@Input() task!: Task;
  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit() {
  }
  deleteTask(task: Task) {
   if(confirm('Are you sure you want to delete this task?')) {
     this.taskService.deleteTask(task);
   }
  }

}
