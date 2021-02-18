import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ToDoItem } from '../Models/ToDoItem';
import { ToDoList } from '../Models/ToDoList';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  ToDo: ToDoList;
  Values: string = '';
  Items: string[] = [];
  constructor(private cookirservice: CookieService) {
    this.ToDo = new ToDoList();
    if (cookirservice.check('ToDoItems')) {
      this.ToDo.items = this.Get();
    }
    this.Set();
  }
  Get() {
    this.Items = this.cookirservice.get('ToDoItems').split(',');
    this.ToDo.items = [];
    this.Items.forEach((element) => {
      let i = element.split('..');
      this.ToDo.items.push(new ToDoItem(i[0], i[1] == 'true', i[2]));
    });
    this.ToDo.items.pop();
    return this.ToDo.items;
  }

  Post(Name: string) {
    this.ToDo.items.push(new ToDoItem(Name));
    this.Set();
  }

  Delete(Name: string) {
    const item = new ToDoItem(Name);
    let i = this.ToDo.items.indexOf(item, 0);
    if (i != -1) {
      this.ToDo.items.splice(i, 1);
    }
    this.Set();
  }

  Set() {
    this.Values = '';
    this.ToDo.items.forEach((element) => {
      this.Values +=
        element.name + '..' + element.status + '..' + element.date + ',';
    });
    this.cookirservice.set('ToDoItems', this.Values);
  }
}
