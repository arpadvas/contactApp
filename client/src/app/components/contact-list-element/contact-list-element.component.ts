import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import Contact from '../../models/contact.model';

@Component({
  selector: 'app-contact-list-element',
  templateUrl: './contact-list-element.component.html',
  styleUrls: ['./contact-list-element.component.css']
})
export class ContactListElementComponent implements OnInit {

  @Input() contactElement: Contact;
  contactUpdated: boolean = false;

  constructor(
    private dataService: DataService
  ) { }

  // remove contacts
  removeContact(id) {
    this.dataService.removeContact(id).subscribe(data => {
      this.contactUpdated = true;
      this.dataService.contactUpdated.emit(this.contactUpdated);
    });
  }

  ngOnInit() {
  }

}
