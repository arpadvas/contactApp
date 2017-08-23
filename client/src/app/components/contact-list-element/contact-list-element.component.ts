import { Component, OnInit, Input } from '@angular/core';
import Contact from '../../models/contact.model';

@Component({
  selector: 'app-contact-list-element',
  templateUrl: './contact-list-element.component.html',
  styleUrls: ['./contact-list-element.component.css']
})
export class ContactListElementComponent implements OnInit {

  @Input() contactElement: Contact;

  constructor() { }

  ngOnInit() {
  }

}
