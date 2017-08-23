import { Component, OnInit, Input } from '@angular/core';
import Address from '../../models/contact.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() addressElement: Address;

  constructor() { }

  ngOnInit() {
  }

}
