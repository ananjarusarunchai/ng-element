import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-superbar',
  templateUrl: './superbar.component.html',
  styleUrls: ['./superbar.component.scss']
})
export class SuperbarComponent implements OnInit {

  @Input()textdisplay: string;

  constructor() { }

  ngOnInit() {
    if (this.textdisplay === undefined) {
      this.textdisplay = 'Hello World';
    }
  }

}
