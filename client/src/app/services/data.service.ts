import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  domain: string = 'http://localhost:3000';
  contactUpdated = new EventEmitter<boolean>();

  constructor(
    private http: Http
  ) { }

  // get all contacts
  getContacts() {
    return this.http.get(`${this.domain}/contacts`).map(res => res.json());
  }

  // add contact
  addContact(contact) {
    return this.http.post(`${this.domain}/contacts`, contact).map(res => res.json());
  }

}
