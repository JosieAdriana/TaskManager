import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';

const BASE_URL = "http://localhost:3000";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  submit() {
    this.http.post<any>(`${BASE_URL}/signin`, {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    })
    .subscribe(({accessToken, user}: { accessToken: string, user: User }) => {
      console.log(user);
      localStorage.setItem('token', accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['tasks']);
    })
  }
}