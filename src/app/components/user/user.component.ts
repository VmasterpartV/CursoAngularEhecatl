import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  role: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.role = this.route.snapshot.params['role'];
    if (this.role !== 'user') {
      Swal.fire({
        title: "Rol dectado: " + this.role,
        text: "Fuiste redirigido a la vista de Admin",
        icon: "error",
        showCancelButton: false,
        confirmButtonColor: "#3085d6"
      }).then((result) => {
        this.router.navigate(['/admin', this.role]);
      });
    } else {
      Swal.fire({
        title: "Rol dectado: " + this.role,
        text: "Vista de User",
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#3085d6"
      })
    }
  }
}
