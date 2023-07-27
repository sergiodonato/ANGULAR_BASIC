import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: 'Minie', type: 'Dog', age: 12 },
    { name: 'Kai', type: 'Cat', age: 6 },
    { name: 'To', type: 'Cat', age: 6 },
    { name: 'Te', type: 'Cat', age: 4 },
  ];

  animal: Animal = {
    name: 'Sergio',
    type: 'Human',
    age: 37,
  };

  animalDetails = '';

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  showType(animal: Animal) {
    this.animalDetails += `O pet ${animal.name} é um ${animal.type}!`;
  }
}
