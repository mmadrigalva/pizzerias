import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { MaterialModule } from '../../shared/material/material.module';
import { HomeOptionsService } from '../../core/home-options.service';

@NgModule({
	imports: [ BrowserModule, MaterialModule ],
	declarations: [ HomeComponent, HomeCardComponent ],
	exports: [ HomeComponent ],
	providers: [ HomeOptionsService ]
})
export class HomeModule {}
