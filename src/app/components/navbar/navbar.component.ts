import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DarkModeService } from 'src/app/services/dark-mode/dark-mode.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  role: string;
  isDarkMode: boolean;

  constructor(private authService: AuthService, private darkModeService: DarkModeService) { }

  ngOnInit() {
    this.authService.role$.subscribe(role => {
      this.role = role;
    });

    this.darkModeService.isDarkMode$.subscribe(isDarkMode => {
      this.isDarkMode = isDarkMode;
    });
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
    // set data-bs-theme attribute to 'dark' or 'light' depending on the value of isDarkMode
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.body.setAttribute('data-bs-theme', theme);
  }
}
