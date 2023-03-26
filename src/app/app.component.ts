import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showSideNav!: boolean;
  currentTaskName: string = '';
  currentTasks: any[] = []
  monthlyTasks: any[] = [
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
  ];
  weeklyTasks: any[] = [
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
  ];
  dailyTasks: any[] = [
    {
      id: 1,
      taskTitle: 'Daily meeting with team',
      completed: true,
    },
    {
      id: 6,
      taskTitle: 'Buy fruits on supermarket',
      completed: false
    },
    {
      id: 1,
      taskTitle: 'Daily meeting with team',
      completed: true,
    },
    {
      id: 6,
      taskTitle: 'Buy fruits on supermarket',
      completed: false
    },
    {
      id: 1,
      taskTitle: 'Daily meeting with team',
      completed: true,
    },
    {
      id: 6,
      taskTitle: 'Buy fruits on supermarket',
      completed: false
    },
    {
      id: 1,
      taskTitle: 'Daily meeting with team',
      completed: true,
    },
    {
      id: 6,
      taskTitle: 'Buy fruits on supermarket',
      completed: false
    }
  ];

  toggleSideNav(): void {
    this.showSideNav = !this.showSideNav;
    if (this.showSideNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  onMonthlyTasksSelected() {
    this.currentTaskName = 'TAREFAS DO MÊS'
    this.currentTasks = this.monthlyTasks;
  }

  onWeeklyTasksSelected() {
    this.currentTaskName = 'TAREFAS DA SEMANA'
    this.currentTasks = this.weeklyTasks;
  }

  onDailyTasksSelected() {
    this.currentTaskName = 'TAREFAS DE HOJE'
    this.currentTasks = this.dailyTasks;
  }

  onEdit($event: any) {
    console.log('onEdit', $event)

  }

  onRemove($event: any) {
    console.log('onRemove', $event)
  }

  onSelected($event: any) {
    console.log('onSelected', $event)
  }

  ngOnInit(): void {
    this.onDailyTasksSelected()
  }
}
