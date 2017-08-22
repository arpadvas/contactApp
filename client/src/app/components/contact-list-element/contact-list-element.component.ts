import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-list-element',
  templateUrl: './contact-list-element.component.html',
  styleUrls: ['./contact-list-element.component.css']
})
export class ContactListElementComponent implements OnInit {

  @Input() contactElement: {id: number, first_name: string, last_name: string, avatar: string};

  constructor() { }

  ngOnInit() {
  }

}
