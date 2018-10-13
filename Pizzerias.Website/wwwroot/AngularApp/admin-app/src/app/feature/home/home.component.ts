import { Component, OnInit } from '@angular/core';
import { HomeCardOption } from '../../shared/view-models/home-card-option';
import { HomeCardOptionType } from '../../shared/enums/home-card-options.enum';
import { Router } from '@angular/router';
import { HomeOptionsService } from '../../core/home-options.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	homeOptions = new Array<HomeCardOption>();
	constructor(private router: Router, private homeOptionsService: HomeOptionsService) {}

	ngOnInit() {
		this.homeOptions = this.homeOptionsService.homeOptions;
	}
	clickOption(option: HomeCardOption) {
		switch (option.type) {
			case HomeCardOptionType.sales:
				this.clickSales();
				break;
			case HomeCardOptionType.reports:
				this.clickReports();
				break;
			case HomeCardOptionType.management:
				this.clickManagement();
				break;
		}
	}
	private clickSales() {
		this.router.navigate([ '/sales' ]);
	}
	private clickReports() {
		alert('Reports');
	}
	private clickManagement() {
		alert('Management');
	}
}
