import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from '../../services/data.service';
import Address from '../../models/address.model';
import Contact from '../../models/contact.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  addresses: Address[] = []; // array of addresses of actual contact
  contact: Contact; // actual contact
  processing: boolean; // processing
  editing: boolean = false; // to show/hide edit form
  disabled:boolean = false; // to disable tabs on editing
  tempAddress: Address; // temporary address container
  headingText: string = 'Address'; // static string for tab heading
  activeTab: number; // active tab
  countries: string[]; // array of choosable countries
  isSelected: boolean = false; // to work around select bug found in ngx bootsrap tabs module

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  // provide with heading for tabs
  getHeading(id) {
    if (id) {
      const number = this.addresses.findIndex(obj => obj.id == id); // calculate address id to be shown by checking the index of actual address element
      return `Address ${number+1}`;
    } else {
      return 'New Address';
    }
  }

  // get active tab
  getActiveTab(id) {
    if (!this.activeTab) {
      return true;
    }
    if (id) {
      if (id == this.activeTab) {
        return true;
      }
    }
  }

  // switch to edit mode
  onEditAddress(addressId) {
    this.editing = true; 
    this.disabled = true;
    // create temporary address for editing
    const tempAddress = this.addresses.filter((obj) => {
      return obj.id == addressId;
    });
    this.tempAddress = JSON.parse(JSON.stringify(tempAddress[0]));
  }

  // create new tab with emty form to add new address
  addNewAddress() {
    const newAddress = new Address('', '', '', '', this.contact.id);
    this.tempAddress = newAddress;
    this.addresses.push(newAddress);
  }

  // save address changes
  onSaveAddress(addressId) {
    this.editing = false;
    this.disabled = false;
    if (addressId) {
      this.dataService.editAddress(addressId, this.tempAddress).subscribe(data => {
        this.dataService.getAddresses(this.route.snapshot.params.id).subscribe(result => {
          this.addresses = result;
          this.activeTab = addressId; // make the edited tab active
          this.addNewAddress();
        });
      });
    } else {
      this.dataService.addAddress(this.contact.id, this.tempAddress).subscribe(data => {
        this.dataService.getAddresses(this.route.snapshot.params.id).subscribe(result => {
          this.addresses = result;
          this.activeTab = this.addresses[0].id; // make the first tab active
          this.addNewAddress();
        });
      });
    }
  }

  // to cancel editing and switch back to address showing mode
  onCancel(id) {
    if (id) {
      this.editing = false;
      this.disabled = false;
      this.tempAddress = new Address('', '', '', '', this.contact.id);
    } else {
      this.tempAddress = new Address('', '', '', '', this.contact.id);
    }
  }

  // create emty form when selecting new address tab
  selectNewAddress(id) {
    if (!id) {
      this.editing = true; 
      if (!this.isSelected) {
        this.isSelected = true;
        this.tempAddress = new Address('', '', '', '', this.contact.id);
      }
    }
  }

  // turn off edit mode when deselect new address
  deselectNewAddress(id) {
    if (!id) {
      this.editing = false; 
    }
  }

  ngOnInit() {;
    this.processing = true;
    this.dataService.getUserDetails(this.route.snapshot.params.id).subscribe(data => {
      this.contact = data[0]; // populate contacts
      this.addresses = data[1]; // populate addresses
      // get new address form active if there is no address
      if (data[1].length < 1) {
        this.editing = true;
        this.isSelected = true;
      } else {
        this.activeTab = this.addresses[0].id;
      }
      // populate countries
      const countries = data[2];
      const countriesIsoCodes: string[] = [];
      for (let i = 0; i < countries.length; i++) {
        countriesIsoCodes.push(countries[i].iso2);
      }
      this.countries = countriesIsoCodes;
      this.processing = false;
      this.addNewAddress();
    });

  }

}
