import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NewUser } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  role: string = '';
  newUserForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.newUserForm = this.createForm();
    this.role = this.route.snapshot.params['role'];
    if (this.role !== 'admin') {
      Swal.fire({
        title: "Rol dectado: " + this.role,
        text: "Serás redirigido a la vista de User",
        icon: "error",
        showCancelButton: false,
        confirmButtonColor: "#3085d6"
      }).then((result) => {
        this.router.navigate(['/user', this.role]);
      });
    } else {
      Swal.fire({
        title: "Rol dectado: " + this.role,
        text: "Vista de Admin",
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#3085d6"
      })
    }
  }

  submit() {
    const user = this.newUserForm.value;
    console.log(user);
    const userString = JSON.stringify(user);
    Swal.fire({
      title: "Usuario creado",
      text: "Redirigiendo a la vista de nuevo usuario",
      icon: "success",
      showCancelButton: false,
      confirmButtonColor: "#3085d6"
    }).then((result) => {
      this.router.navigate(['/new-user'], { queryParams: { user: userString } });
    });
  }

  createForm() {
    return this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      firstLastName: new FormControl('', [Validators.required]),
      secondLastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required])
    });
  }
}
