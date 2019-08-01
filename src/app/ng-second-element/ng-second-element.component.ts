import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-ng-second-element',
  templateUrl: './ng-second-element.component.html',
  styleUrls: ['./ng-second-element.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class NgSecondElementComponent implements OnInit {

  @Input() public name = '';

  constructor() { }

  ngOnInit() {
  }

}
