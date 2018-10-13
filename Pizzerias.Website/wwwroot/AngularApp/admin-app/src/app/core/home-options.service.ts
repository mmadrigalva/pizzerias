import { Injectable } from '@angular/core';
import { HomeCardOption } from '../shared/view-models/home-card-option';
import { HomeCardOptionType } from '../shared/enums/home-card-options.enum';

@Injectable()
export class HomeOptionsService {
	private _homeOptions: Array<HomeCardOption>;
	get homeOptions(): Array<HomeCardOption> {
		if (this._homeOptions === undefined) this.generateHomeCards();
		return this._homeOptions;
	}

	private generateHomeCards() {
		this._homeOptions = new Array<HomeCardOption>();
		var salesOption = new HomeCardOption(
			'Ventas',
			'Pizzas, platillos italianos, otros...',
			'/assets/icons/home/pizza.svg',
			HomeCardOptionType.sales
		);
		var reportOption = new HomeCardOption(
			'Reportes',
			'Ventas, inventarios, otros...',
			'/assets/icons/home/stadistics.svg',
			HomeCardOptionType.reports
		);
		var adminOption = new HomeCardOption(
			'Administración',
			'Productos, precios, otros...',
			'/assets/icons/home/management.svg',
			HomeCardOptionType.management
		);
		this._homeOptions.push(salesOption, reportOption, adminOption);
	}
}
