import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewUser } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  user: NewUser = {
    name: '',
    firstLastName: '',
    secondLastName: '',
    email: '',
    password: '',
    role: '',
    image: ''
  };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const userString = params['user'];
      console.log(userString);
      this.user = JSON.parse(userString);
    });
  }
}
