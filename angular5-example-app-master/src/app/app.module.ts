import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {APP_CONFIG, AppConfig} from './config/app.config';

import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/modules/shared.module';
import {CoreModule} from './core/core.module';

import {AppComponent} from './app.component';
import {AboutComponent} from './calculator/about/about.component';
import {CalculatorComponent} from './calculator/calculator/calculator.component';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    CoreModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    CalculatorComponent
  ],
  providers: [
    {provide: APP_CONFIG, useValue: AppConfig},
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
