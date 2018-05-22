import { Component } from '@angular/core';
import { Priority } from './priority';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newTask: Task = {
    id: 0, description: '',
    completed: false, priority: Priority.Normal
  };
  priorities = [Priority.Low, Priority.Normal, Priority.High];

  getNameForPriority(priority: Priority): string {
    return Priority[priority];
  }

  getNextId(): number {
    return this.tasks.length + 1;
  }

  addTask(task: Task, event: Event): void {
    task.id = this.getNextId();
    this.tasks.push(task);
    this.newTask = {
      id: 0, description: '',
      completed: false, priority: Priority.Normal
    };
    event.preventDefault();
  }

  tasks: Task[];

  constructor() {
    this.tasks = [
      {
        id: 1, description: 'fix heisenbug',
        completed: false, priority: Priority.Normal
      },
      {
        id: 2, description: 'set up fear-driven development',
        completed: false, priority: Priority.High
      },
      {
        id: 3, description: 'fix hindenbug',
        completed: false, priority: Priority.Low
      }
    ];
  }

  low = Priority.Low;
  high = Priority.High;
}
