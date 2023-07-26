import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  name: string = 'Teteco';
  age: number = 4;
  job = 'jardineiro mirim';
  hobbies = ['pular', 'morder', 'morder']
  cor = {
    main: 'amarelo',
    secondary: 'creme'
  }
}
