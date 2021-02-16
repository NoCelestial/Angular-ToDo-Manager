import { Component } from '@angular/core';
import { ToDoService } from './Services/to-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private service: ToDoService) {}
  // Get() {
  //   return this.service.Get();
  // }
}
