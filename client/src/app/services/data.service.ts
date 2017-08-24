import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class DataService {

  domain: string = 'http://localhost:3000';
  contactUpdated = new EventEmitter<boolean>();

  constructor(
    private http: Http
  ) { }

  // get all contacts
  getContacts(): Observable<any> {
    return this.http.get(`${this.domain}/contacts`)
    .map(res => res.json())
    .catch((res) => {
        return this.handleResponseError(res);
      });
  }

  // get contact by id
  getContact(id): Observable<any> {
    return this.http.get(`${this.domain}/contacts/${id}`)
    .map(res => res.json())
    .catch((res) => {
        return this.handleResponseError(res);
      });
  }

  // add contact
  addContact(contact): Observable<any> {
    return this.http.post(`${this.domain}/contacts`, contact)
    .map(res => res.json())
    .catch((res) => {
        return this.handleResponseError(res);
      });
  }

  // remove contact
  removeContact(id): Observable<any> {
    return this.http.delete(`${this.domain}/contacts/${id}`)
    .map(res => res.json())
    .catch((res) => {
        return this.handleResponseError(res);
      });
  }

  // get contact addresses
  getAddresses(id): Observable<any> {
    return this.http.get(`${this.domain}/contacts/${id}/addresses`)
    .map(res => res.json())
    .catch((res) => {
        return this.handleResponseError(res);
      });
  }

  // edit address
  editAddress(addressId, address): Observable<any> {
    return this.http.put(`${this.domain}/addresses/${addressId}`, address)
    .map(res => res.json())
    .catch((res) => {
        return this.handleResponseError(res);
      });
  }

  // add address
  addAddress(contactId, address): Observable<any> {
    return this.http.post(`${this.domain}/contacts/${contactId}/addresses`, address)
    .map(res => res.json())
    .catch((res) => {
        return this.handleResponseError(res);
      });
  }

  // get contact details and addresses
  getUserDetails(id) {
    return Observable.forkJoin(
      this.http.get(`${this.domain}/contacts/${id}`)
      .map(res => res.json())
      .catch((res) => {
        return this.handleResponseError(res);
      }),
      this.http.get(`${this.domain}/contacts/${id}/addresses`)
      .map(res => res.json())
      .catch((res) => {
        return this.handleResponseError(res);
      })
    );
  }

  private handleResponseError(response): Observable<any> {
    return Observable.throw(response);
  }

}
