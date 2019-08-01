import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { NgCustomElementComponent } from './ng-custom-element/ng-custom-element.component';
import { NgDefaultElementComponent } from './ng-default-element/ng-default-element.component';
import { NgSecondElementComponent } from './ng-second-element/ng-second-element.component';

@NgModule({
  declarations: [
    NgCustomElementComponent,
    NgDefaultElementComponent,
    NgSecondElementComponent
  ],
  entryComponents: [
    NgCustomElementComponent,
    NgDefaultElementComponent,
    NgSecondElementComponent,
  ],
  imports: [
    BrowserModule
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const CUSTOM_ELEMENT_MAP = {
      'custom-element': createCustomElement(NgCustomElementComponent, { injector: this.injector }),
      'default-element': createCustomElement(NgDefaultElementComponent, { injector: this.injector }),
      'second-element': createCustomElement(NgSecondElementComponent, { injector: this.injector }),
    };

    Object.keys(CUSTOM_ELEMENT_MAP).forEach((elementName) => {
      customElements.define(elementName, CUSTOM_ELEMENT_MAP[elementName]);
    });
  }
}
