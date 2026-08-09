import { Component } from '@angular/core';
import { TitleCasePipe, DatePipe, CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [TitleCasePipe, DatePipe, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name: string = '';
  date: string = '';
  amount: number = 0;

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.date = value;
  }

  onAmountChange(value: string) {
    this.amount = Number(value) || 0;
  }
}
