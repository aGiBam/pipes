import { Component } from '@angular/core';
import { TitleCasePipe, DatePipe, CurrencyPipe, DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [TitleCasePipe, DatePipe, CurrencyPipe, DecimalPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name: string = '';
  date: string = '';
  amount: number = 0;
  height: number = 0;

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.date = value;
  }

  onAmountChange(value: string) {
    this.amount = Number(value) || 0;
  }

  onHeightChange(value: string) {
    this.height = Number(value) || 0;
  }
}
