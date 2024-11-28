import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../Services/task.service'
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent implements OnInit {

  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit(){

  }
  addTask(newTitle: HTMLInputElement, newDescription: HTMLTextAreaElement) {
    console.log('adding...', newTitle.value, newDescription.value);
    this.taskService.addTask({title: newTitle.value, description: newDescription.value , hide: true});
newTitle.value = '';
newDescription.value = '';
newTitle.focus();
    return false;
  }


}
