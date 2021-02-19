import { Component } from '@angular/core';
import { ToDoItem } from 'src/app/Models/ToDoItem';
import { ToDoService } from 'src/app/Services/to-do.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  constructor(private service: ToDoService) {
    this.todoitems = service.Get();
  }
  todoitems: ToDoItem[];

  Get() {
    return this.todoitems;
  }
  Delete(i: string) {
    this.service.Delete(i);
  }
}
