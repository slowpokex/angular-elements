import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-ng-default-element',
  templateUrl: './ng-default-element.component.html',
  styleUrls: ['./ng-default-element.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class NgDefaultElementComponent implements OnInit {

  @Input() public name = '';

  constructor() { }

  ngOnInit() {
  }

}
