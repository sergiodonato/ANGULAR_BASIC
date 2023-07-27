import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals = [
    {name: 'Minie', type: 'Dog'},
    {name: 'Kai', type: 'Cat'},
    {name: 'To', type: 'Cat'},
    {name: 'Te', type: 'Cat'}
  ]
}
