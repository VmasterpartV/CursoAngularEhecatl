import { Component } from '@angular/core';
import { User } from '../../interfaces/usuario';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  usersList: User[] = [
    {
      name: 'Juan',
      age: 25,
      number: '1234567894',
      email: 'juan@correo.com',
      hasNumber: true
    },
    {
      name: 'Pedro',
      age: 30,
      number: '9876543217',
      email: 'pedro@correo.com',
      hasNumber: true
    },
    {
      name: 'Maria',
      age: 28,
      number: '1234567893',
      email: 'maria@correo.com',
      hasNumber: true
    },
    {
      name: 'Ana',
      age: 35,
      number: '9876543214',
      email: 'ana@correo.com',
      hasNumber: true
    },
    {
      name: 'Luis',
      age: 40,
      number: '1234567891',
      email: 'luis@correo.com',
      hasNumber: true
    },
    {
      name: 'Carlos',
      age: 45,
      number: '9876543217',
      email: 'carlos@correo.com',
      hasNumber: true
    }
  ];
}
