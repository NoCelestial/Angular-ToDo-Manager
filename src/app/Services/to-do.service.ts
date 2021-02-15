import { Injectable } from '@angular/core';
import { ToDoItem } from '../Models/ToDoItem';
import { ToDoList } from '../Models/ToDoList';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  ToDo: ToDoList;
  constructor() {
    this.ToDo = new ToDoList();
  }
  Get() {
    return this.ToDo.items;
  }

  Post(Name: string) {
    this.ToDo.items.push(new ToDoItem(Name));
  }

  Delete(Name: string) {
    const item = new ToDoItem(Name);
    let i = this.ToDo.items.indexOf(item, 0);
    if (i != -1) {
      this.ToDo.items.splice(i, 1);
    }
  }
}
