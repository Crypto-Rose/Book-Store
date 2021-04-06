import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User ';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  invalidLogin = false
  status = false;

  constructor(private router: Router,
    private httpClientService: HttpClientService) { }

  ngOnInit() {
  }

  checkLogin() {    
    this.httpClientService.login(this.user).subscribe(
      response => {  
        this.router.navigate(['/shop']);
        sessionStorage.setItem('dataRole', response.type);        
        sessionStorage.setItem('isLoggedIn', 'true');
          this.status = true;      
      },
      error => console.log(error)
    );
    this.user.name = ''
    this.user.password = ''
  }

}
