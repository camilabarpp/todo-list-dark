import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  tasks: any[] = [
    {
      id: 1,
      taskTitle: 'Task 1',
      description: 'Description 1',
      completed: true,
    },
    {
      id: 2,
      taskTitle: 'Task 2',
      description: 'Description 2',
      completed: false,
    },
    {
      id: 3,
      taskTitle: 'Task 3',
      description: 'Description 2',
      completed: true,
    },
    {
      id: 4,
      taskTitle: 'Task 4',
      description: 'Description 2',
      completed: false,
    }
  ]

  onEdit($event: any) {
    console.log('onEdit', $event)

  }

  onRemove($event: any) {
    console.log('onRemove', $event)
  }

  onSelected($event: any) {
    console.log('onSelected', $event)
  }
}
