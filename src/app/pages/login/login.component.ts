import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';

const BASE_URL = "http://localhost:3000";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form = {
    email: '',
    password: '',
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.http.post<any>(`${BASE_URL}/signin`, {
      "email": this.form.email,
      "password": this.form.password
    })
    .subscribe(({accessToken, user}: { accessToken: string, user: User }) => {
      console.log(user);
      localStorage.setItem('token', accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['tasks']);
    })
  }
}
