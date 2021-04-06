import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
  cartBooks: any;
  totalPrice: number = 0;
  myModal: any;
  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    let data = localStorage.getItem('cart');
    if (data !== null) {
      this.cartBooks = JSON.parse(data);
      
      for(let i = 0; i < this.cartBooks.length; i++){              
        this.totalPrice += parseInt(this.cartBooks[i].price);        
      }
    } else {
      this.cartBooks = [];
    }

  }

  addOrder(data){    
    console.log(data)    
    /*this.httpClientService.addOrders(this.cartBooks).subscribe(
      (user) => {
        console.log(user)
      }
    );*/
  }

}
