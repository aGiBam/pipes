import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name: string = '';

  onNameChange(value: string) {
    this.name = value;
  }
}
