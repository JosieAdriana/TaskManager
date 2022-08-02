import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { isEqual } from 'src/app/validators/is-equal';

const BASE_URL = 'http://localhost:3000';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public submitted: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        first_name: new FormControl('', [Validators.required, Validators.minLength(4)]),
        last_name: new FormControl('', [Validators.required, Validators.minLength(4)]),
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
        password_confirmation: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      },{
        validator: isEqual('password', 'password_confirmation')
      }
    );
  }

  submit(): void {
    if (this.form.valid === false && this.submitted === false) {
      return;
    }

    this.submitted = true;

    this.http.post<any>(`${BASE_URL}/users`, {
        first_name: this.form.get('first_name')?.value,
        last_name: this.form.get('last_name')?.value,
        email: this.form.get('email')?.value,
        password: this.form.get('password')?.value,
      }).subscribe((user: User) => {
        alert('User Created!');

        setTimeout(() => {
          this.router.navigate(['login']);
        }, 2000);
      }, (error: HttpErrorResponse) => {
        alert(error.message);

        this.submitted = false;
      }, () => {
        this.submitted = false;
      }
    );
  }
}
