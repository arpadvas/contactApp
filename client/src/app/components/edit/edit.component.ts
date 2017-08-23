import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import Address from '../../models/address.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  addresses: Address[] = [];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  // get contact addresses
  getAddresses(id) {
    this.dataService.getAddresses(id).subscribe(data => {
      console.log(data);
      this.addresses = data;
    });
  }

  ngOnInit() {
    this.getAddresses(this.route.snapshot.params.id);

  }

}
