import { Component } from '@angular/core';
import { TitleCasePipe, DatePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [TitleCasePipe, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name: string = '';
  date: string = '';

  onNameChange(value: string) {
    this.name = value;
  }
  onDateChange(value: string) {
    this.date = value;
  }
}
