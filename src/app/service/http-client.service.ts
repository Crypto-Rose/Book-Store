import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/User ';
import { Book } from '../model/Book';
import { map } from 'rxjs/operators';
import { Order } from '../model/Order';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getUsers()
  {    
    return this.httpClient.get<User[]>('http://localhost:8080/users/get');
  }


  addUser(newUser: User) {
    return this.httpClient.post<User>('http://localhost:8080/users/add', newUser);   
  }

  deleteUser(id) {
    return this.httpClient.delete<User>('http://localhost:8080/users/' + id);
  }

  getBooks() {
    return this.httpClient.get<Book[]>('http://localhost:8080/books/get');
  }

  addBook(newBook: Book) {
    return this.httpClient.post<Book>('http://localhost:8080/books/add', newBook);
  }

  deleteBook(id) {
    return this.httpClient.delete<Book>('http://localhost:8080/books/' + id);
  }

  updateBook(updatedBook: Book) {
    return this.httpClient.put<Book>('http://localhost:8080/books/update', updatedBook);
  }

 /* addOrders(order: Order) {
    console.log(order)
    return this.httpClient.post<User>('http://localhost:8080/order/add',order);
  }*/

  /**Session**/
  login(user: User) {
    console.log(user)
    return this.httpClient.post<User>('http://localhost:8080/users/login',user);
  }

  isUserLoggedIn() {
    return sessionStorage.getItem('isLoggedIn')     
  }

  isUserRole() {
    return sessionStorage.getItem('dataRole')             
  }

}
