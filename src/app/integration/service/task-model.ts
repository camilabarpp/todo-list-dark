export interface Task {
  taskId: number;
  taskTitle: string;
  description: string;
  dueDate: Date;
  completed: boolean;
  category: Category;
}

export interface Category {
  categoryId: number;
  categoryName: string;
}
