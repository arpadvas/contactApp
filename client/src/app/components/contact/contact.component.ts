import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import Contact from '../../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(
    private dataService: DataService
  ) {
    this.dataService.contactUpdated.subscribe((contactUpdated: boolean) => {
      if (contactUpdated) {
        this.getContacts();
      }
    });
  }

  getContacts() {
    this.dataService.getContacts().subscribe(data => {
      console.log(data);
      this.contacts = data;
    });
  }

  ngOnInit() {
    this.getContacts();
  }

}
