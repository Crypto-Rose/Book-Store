import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private httpClientService:HttpClientService,
    private router: Router) { }

  ngOnInit() {
    
  }

  UserLoginIn(){
    return this.httpClientService.isUserLoggedIn();
  }

  UserRole(){
    const role = this.httpClientService.isUserRole();
    return role === 'admin'
    ? true
    : false    
  }

  logOut(){
    this.router.navigate(['']);
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('dataRole');
  }

}
