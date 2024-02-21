import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../../interfaces/usuario';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User = {
    name: '',
    age: 0,
    number: '',
    email: '',
    hasNumber: true
  };

  userForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    let user = this.route.snapshot.params;
    this.user.name = user['name'];
    this.user.age = user['age'];
    this.user.number = user['number'];
    this.user.email = user['email'];

    this.userForm = this.createForm();
    this.detectChanges();
  }

  createForm() {
    return this.formBuilder.group({
      name: new FormControl(this.user.name, [Validators.required]),
      age: new FormControl(this.user.age, [Validators.required]),
      number: new FormControl(this.user.number, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      hasNumber: new FormControl(true)
    });
  }

  detectChanges() {
    this.userForm.get('hasNumber').valueChanges.subscribe(value => {
      if (value) {
        this.userForm.get('number').setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
        this.userForm.get('number').enable();
      } else {
        this.userForm.get('number').clearValidators(),
        this.userForm.get('number').disable();
      }
    });
  }

  onSubmit() {
    let userEdited: User = this.userForm.value;
    console.log('User data submitted:', userEdited);
  }
}