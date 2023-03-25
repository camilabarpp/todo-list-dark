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
      taskTitle: 'Daily meeting with team',
      completed: true,
    },
    {
      id: 2,
      taskTitle: 'Pay for rent',
      completed: false,
    },
    {
      id: 3,
      taskTitle: 'Check emails',
      completed: true,
    },
    {
      id: 4,
      taskTitle: 'Lunch with John',
      completed: false,
    },
    {
      id: 5,
      taskTitle: 'Meditation at 6:00 AM',
      completed: true,
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

  showBar(): void {
    let slideSearch: HTMLElement = document.querySelector(".me-2") as HTMLElement;
    slideSearch.style.display = "block";
  }
}
