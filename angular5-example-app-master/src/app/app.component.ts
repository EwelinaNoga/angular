import {Component} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

import {NavigationEnd, Router} from '@angular/router';
import {AppConfig} from './config/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  constructor(private title: Title,
              private meta: Meta,
              private router: Router) {

    this.title.setTitle('Angular Example Calculator App');
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        switch (event.urlAfterRedirects) {
          case '/':
            this.meta.updateTag({
              name: 'description',
              content: 'New angular app with calculator. About me page.'
            });
            break;
          case '/' + AppConfig.routes.calculator:
            this.title.setTitle('My cool calculator');
            this.meta.updateTag({
              name: 'Count what you want',
              content: 'Calculator app'
            });
            break;
        }
      }
    });
  }
}
