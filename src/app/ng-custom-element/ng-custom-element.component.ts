import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-ng-custom-element',
  templateUrl: './ng-custom-element.component.html',
  styleUrls: ['./ng-custom-element.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class NgCustomElementComponent implements OnInit {

  @Input() public name = '';

  constructor() { }

  ngOnInit() {
  }

}
