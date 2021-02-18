import { Component } from '@angular/core';
import { ToDoService } from 'src/app/Services/to-do.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  constructor(private service: ToDoService) {}
  Get() {
    return this.service.Get();
  }
}
