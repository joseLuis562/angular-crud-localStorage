import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../Services/task.service';
import { Task } from '../../Models/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css' // Corrige "styleUrl" -> "styleUrls"
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = []; // Inicialización de la propiedad

  constructor(public taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks(); // Asignar el valor retornado por el servicio
  }
}
