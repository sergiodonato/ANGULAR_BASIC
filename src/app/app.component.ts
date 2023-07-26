import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Minie';

  userData = {
    email: 'minie@pknpinxrs.com',
    role: 'Prim',
  };

  title = 'ANGULAR_BASIC';
}
