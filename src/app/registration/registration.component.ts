import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User ';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @Input()
  user: User

  @Output()
  userAddedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService,
    private router: Router) { }

  ngOnInit() {   
  }

  addUser(data) {    
    this.httpClientService.addUser(data).subscribe(
      (user) => {
        this.userAddedEvent.emit();
        this.router.navigate(['']);        
      }
    );
  }

}
