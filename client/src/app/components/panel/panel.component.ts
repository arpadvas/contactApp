import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input() contentElement: {name: string, role: string, description: string};

  constructor() { }

  ngOnInit() {
  }

}
