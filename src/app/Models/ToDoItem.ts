export class ToDoItem {
  name: string;
  status: boolean;
  date: string;
  constructor(Name: string, Status: boolean = false) {
    this.name = Name;
    this.status = Status;
    this.date = new Date().toDateString();
  }
}
