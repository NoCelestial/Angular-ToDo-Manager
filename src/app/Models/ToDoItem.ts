export class ToDoItem {
  name: string;
  status: boolean;
  date: string;
  constructor(Name: string, Status: boolean = false, date?: string) {
    this.name = Name;
    this.status = Status;
    if (date != null) {
      this.date = date;
      return;
    }
    this.date = new Date().toDateString();
  }
}
