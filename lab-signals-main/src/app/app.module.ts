import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalsIntroComponent } from './signals-intro/signals-intro.component';
import { EffectsComponent } from './effects/effects.component';
import { EffectsDemoComponent } from './effects-demo/effects-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    SignalsIntroComponent,
    EffectsComponent,
    EffectsDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
