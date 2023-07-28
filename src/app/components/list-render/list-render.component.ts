import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals: Animal[] = [];

  animalDetails = '';

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  showType(animal: Animal) {
    this.animalDetails += `O pet ${animal.name} é um ${animal.type}!`;
  }

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  removeAnimal(animal: Animal) {
    console.log('removendo bichos?!@...');
    this.animals = this.listService.remove(this.animals, animal);
  }

  ngOninit(): void {}

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
