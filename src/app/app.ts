import { Component } from '@angular/core';
import { TitleCasePipe, DatePipe, CurrencyPipe, DecimalPipe, JsonPipe } from '@angular/common';
import { ConvertPipe } from './convert-pipe';

@Component({
  selector: 'app-root',
  imports: [TitleCasePipe, DatePipe, CurrencyPipe, DecimalPipe, JsonPipe, ConvertPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name: string = '';
  date: string = '';
  amount: number = 0;
  height: number = 0;
  miles: number = 0;
  car = {
    make: 'Audi',
    model: 'A4',
    year: 2020
  }
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
    this.height = parseFloat(value);
  }

  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }
}
