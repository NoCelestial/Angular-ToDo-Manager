import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../Services/to-do.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  constructor(private service: ToDoService) {}
  error: string = '';
  ngOnInit(): void {}

  Add(i: string) {
    if (i.length > 300 || i == '') {
      this.error = 'Plz Use Valid Input';
      return;
    }
    this.error = '';
    this.service.Post(i);
  }
}
