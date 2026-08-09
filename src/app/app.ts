import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [TitleCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name: string = '';

  onNameChange(value: string) {
    this.name = value;
  }
}
