import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeOptionsService } from '../../core/home-options.service';
import { HomeCardOption } from '../../shared/view-models/home-card-option';
import { HomeCardOptionType } from '../../shared/enums/home-card-options.enum';
import { TableLounge } from '../../shared/view-models/table-lounge';
import { MatSidenav } from '@angular/material';
import { SaleStep } from '../../shared/enums/sale-step.enum';

@Component({
	selector: 'app-sales',
	templateUrl: './sales.component.html',
	styleUrls: [ './sales.component.scss' ]
})
export class SalesComponent implements OnInit {
	@ViewChild(MatSidenav) sideNav: MatSidenav;

	selectedSaleStep: SaleStep = SaleStep.restaurantLounge;
	saleSteps = SaleStep;
	salesOption: HomeCardOption;
	showSideNav = false;
	selectedTable = new TableLounge();
	constructor(private homeOptionsService: HomeOptionsService) {}

	ngOnInit() {
		this.salesOption = this.homeOptionsService.homeOptions.find(
			(option) => option.type === HomeCardOptionType.sales
		);
	}
	clickTable(table: TableLounge) {
		this.selectedTable = table;
		this.showSideNav = true;
	}
	newOrderClick(table: TableLounge) {
		this.sideNav.toggle().then(() => {
			this.selectedSaleStep = SaleStep.menu;
		});
	}
}
