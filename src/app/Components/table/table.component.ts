import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToDoItem } from 'src/app/Models/ToDoItem';
import { ToDoService } from 'src/app/Services/to-do.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
  constructor(private service: ToDoService) {}

  displayedColumns: string[] = ['name', 'date'];
  dataSource = new MatTableDataSource<ToDoItem>(this.Get());

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  Get() {
    return this.service.Get();
  }

  Refresh() {
    this.dataSource.data = this.Get();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
