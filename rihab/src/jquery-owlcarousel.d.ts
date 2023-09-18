import * as jQuery from 'jquery';

declare global {
  interface JQuery {
    owlCarousel(options?: any): JQuery;
  }
}

export = jQuery;