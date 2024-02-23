import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  role: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.role$.subscribe(role => {
      this.role = role;
    });
  }
}
