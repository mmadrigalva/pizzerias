import { Component, OnInit } from '@angular/core';
import { SalesService } from '../sales.service';
import { Category } from '../../../shared/view-models/category';
@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: [ './menu.component.scss' ]
})
export class MenuComponent implements OnInit {
	loadingCategories = false;
	categories = new Array<Category>();
	constructor(private salesService: SalesService) {}

	ngOnInit() {
		this.salesService
			.getCategories()
			.finally(() => (this.loadingCategories = false))
			.subscribe((result: Array<Category>) => {
				this.categories = result;
			});
	}
}
