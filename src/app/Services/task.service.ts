import { Injectable } from '@angular/core';
import { Task } from '../Models/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [];

  constructor() {
    // Inicializar las tareas desde el localStorage si existen
    const tasksFromStorage = localStorage.getItem('tasks');
    if (tasksFromStorage) {
      this.tasks = JSON.parse(tasksFromStorage);
    }
  }

  getTasks() {
    if(localStorage.getItem('tasks') === null) {
      return this.tasks;
    }else{
      this.tasks = JSON.parse(localStorage.getItem('tasks')!);
      return this.tasks;
    }

  }

  addTask(task: Task) {
    this.tasks.push(task);
    let tasks:  Task[]=[];
    if(localStorage.getItem('tasks') === null)
    {
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }else{
      tasks = JSON.parse(localStorage.getItem('tasks')!);
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

  }

  deleteTask(task: Task) {

for (let i = 0; i < this.tasks.length; i++) {
  if (task === this.tasks[i]) {
    this.tasks.splice(i, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));

  }
}
  }
}
