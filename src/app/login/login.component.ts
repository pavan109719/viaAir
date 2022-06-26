import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(
    private router : Router,
    private service:LoginServiceService
  ) { }

  uName: string = '';
  pwd: string = '';
 

  ngOnInit(): void {
  }

  login(){    
    console.log('login');
    
    if(this.uName.trim()!== '' && this.pwd.trim() !== '' ){
      localStorage.setItem('username',this.uName);
      this.router.navigate(['home']);
      this.service.loginStatusChanged.next(true);
    }
  }

}
