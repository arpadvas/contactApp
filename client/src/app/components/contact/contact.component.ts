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
    // catch if contact was added
    this.dataService.contactUpdated.subscribe((contactUpdated: boolean) => {
      if (contactUpdated) {
        this.getContacts();
      }
    });
  }

  // get all contacts
  getContacts() {
    this.dataService.getContacts().subscribe(data => {
      this.contacts = data;
    });
  }

  ngOnInit() {
    this.getContacts();
  }

}
