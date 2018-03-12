import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()textdisplay: string;


  constructor() { }

  ngOnInit() {
    if (this.textdisplay === undefined) {
      this.textdisplay = 'Hello World';
    }
  }

}
