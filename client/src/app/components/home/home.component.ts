import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  panelContent:{name: string, role: string, description: string}[] = [
    {
      name: 'John Doe',
      role: 'Frontend developer',
      description: 'John is a smart guy.'
    },
    {
      name: 'Jane Doe',
      role: 'Backend developer',
      description: 'Jane is a smart girl.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
