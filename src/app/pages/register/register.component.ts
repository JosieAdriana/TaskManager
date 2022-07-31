import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { HttpClient } from '@angular/common/http';
import { UuidService } from 'src/app/services/uuid.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: User = {
    uuid: '',
    email: '',
    name: '',
    password: '',
  }
  constructor(
    private http: HttpClient,
    private uuid: UuidService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  submit() {
    this.http.post<any>('http://localhost:3000/users', {
      "id": this.uuid.generate(),
      "name": this.form.name,
      "email": this.form.email,
      "password": this.form.password
    }).subscribe(data => {
      alert("Usuário Cadastrado");

      this.router.navigate(['login']);
    })
  }
}
