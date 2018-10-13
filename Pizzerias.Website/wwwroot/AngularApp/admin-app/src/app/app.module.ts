import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './feature/home/home.module';
import { SalesModule } from './feature/sales/sales.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, BrowserAnimationsModule, MaterialModule, AppRoutingModule, HomeModule, SalesModule ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
