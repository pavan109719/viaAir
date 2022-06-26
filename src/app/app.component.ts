import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'via-air';
  isLoggedIn: boolean = false;

  constructor( private router : Router,
    private service : LoginServiceService) {

  }
  ngOnInit(): void {
    this.isLoggedIn = !!(localStorage.getItem('username'));   
    this.service.loginStatusChanged.subscribe(data=>{
      this.isLoggedIn = data;
    })     
  }
  logout() {
    localStorage.removeItem('username');
    this.router.navigate(['login']);
    this.isLoggedIn = false;
  }


}
