import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService) { }

  role: string;

  ngOnInit(): void {
    this.authService.role$.subscribe(role => {
      this.role = role;
    });
    Swal.fire({
      title: "Rol dectado: " + this.role,
      text: "Vista común",
      icon: "success",
      showCancelButton: false,
      confirmButtonColor: "#3085d6"
    })
  }
  
  changeRoleAction(role: string) {
    this.role = role;
    this.authService.setRole(role);
    console.log(role);
  }
}
