import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(data) {
    console.log(data)
  }
  back() {
    this.router.navigate(['/']);
  }
}