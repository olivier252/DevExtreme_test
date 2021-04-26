import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class DataGridService {
  baseUrl = environment.endPoint_URL;
  headersOption = new HttpHeaders({ 'content-type': 'application/json' });

  constructor(private http: HttpClient) { }

  getCustomerListService(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}customers`);
  }

  addCustomerService(customer: Customer): Observable<Customer> {
   const customerJson  = JSON.stringify(customer);
  return this.http.post<Customer>(`${this.baseUrl}customers`, customerJson, {headers: this.headersOption});
  }
  
}
