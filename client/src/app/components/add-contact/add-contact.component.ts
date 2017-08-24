import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataService } from '../../services/data.service';
import Contact from '../../models/contact.model';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  form: FormGroup;
  contactUpdated: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.createForm();
  }

  // create form to get contact data
  createForm() {
    this.form = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required]
    });
  }

  // submit contact data
  onAddContactSubmit() {
    const contact = new Contact(this.form.get('fname').value, this.form.get('lname').value, 'https://handmade.network/static/light/empty-avatar.svg');
    this.dataService.addContact(contact).subscribe(data => {
      this.contactUpdated = true;
      this.dataService.contactUpdated.emit(this.contactUpdated); // emit contactUpdated event
      this.form.reset();
    });
  }

  ngOnInit() {
  }

}
