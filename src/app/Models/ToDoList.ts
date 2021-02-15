import { ToDoItem } from './ToDoItem';

export class ToDoList {
  items: ToDoItem[];
  constructor() {
    this.items = [
      new ToDoItem('Task 1'),
      new ToDoItem('Task 2'),
      new ToDoItem('Task 3'),
      new ToDoItem('Task 4'),
      new ToDoItem('Task 5'),
    ];
  }
}
