import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User | undefined;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage!['user']);
  }

  logout() {
    localStorage.clear();

    this.router.navigate(['login']);
  }

}
