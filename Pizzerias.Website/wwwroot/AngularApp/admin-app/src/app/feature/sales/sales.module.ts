import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../../shared/material/material.module';
import { SalesComponent } from './sales.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeOptionsService } from '../../core/home-options.service';
import { RestaurantLoungeComponent } from './restaurant-lounge/restaurant-lounge.component';
import { RestaurantTableComponent } from './restaurant-lounge/restaurant-table/restaurant-table.component';
import { TableInvoiceComponent } from './table-invoice/table-invoice.component';
import { SalesService } from './sales.service';
import { MenuComponent } from './menu/menu.component';

@NgModule({
	imports: [ BrowserModule, MaterialModule, SharedModule ],
	declarations: [
		SalesComponent,
		RestaurantLoungeComponent,
		RestaurantTableComponent,
		TableInvoiceComponent,
		MenuComponent
	],
	exports: [ SalesComponent ],
	providers: [ HomeOptionsService, SalesService ]
})
export class SalesModule {}
