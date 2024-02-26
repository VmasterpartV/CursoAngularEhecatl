import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CursoAngular';
  userRole = 'user';

  constructor() { }


  changeRole(role: string) {
    this.userRole = role;
    console.log(this.userRole);
  }
}
