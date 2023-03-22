import { Component } from '@angular/core';

@Component({
  selector: 'todo-body',
  templateUrl: './todo-body.component.html',
  styleUrls: ['./todo-body.component.scss']
})
export class TodoBodyComponent {
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
    },
    {
      id: 5,
      taskTitle: 'Task 5',
      description: 'Description 1',
      completed: true,
    },
    {
      id: 6,
      taskTitle: 'Task 6',
      description: 'Description 2',
      completed: false,
    },
    {
      id: 7,
      taskTitle: 'Task 7',
      description: 'Description 2',
      completed: true,
    },
    {
      id: 8,
      taskTitle: 'Task 8',
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
