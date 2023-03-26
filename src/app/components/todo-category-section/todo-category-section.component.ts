import { Component } from '@angular/core';

@Component({
  selector: 'todo-category-section',
  templateUrl: './todo-category-section.component.html',
  styleUrls: ['./todo-category-section.component.scss']
})
export class TodoCategorySectionComponent {

  categories: any[] = [
    {
      categoryId: 1,
      categoryName: 'Trabalho',
    },
    {
      categoryId: 2,
      categoryName: 'Estudos',
    },
    {
      categoryId: 3,
      categoryName: 'Mercado',
    },
    {
      categoryId: 4,
      categoryName: 'Saúde',
    },
    {
      categoryId: 5,
      categoryName: 'Pet',
    },
    {
      categoryId: 6,
      categoryName: 'Viagem',
    }
  ]

}
