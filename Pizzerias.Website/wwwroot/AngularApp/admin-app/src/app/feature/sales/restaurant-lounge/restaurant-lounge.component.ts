import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TableLounge } from '../../../shared/view-models/table-lounge';
import { SalesService } from '../sales.service';

@Component({
	selector: 'restaurant-lounge',
	templateUrl: './restaurant-lounge.component.html',
	styleUrls: [ './restaurant-lounge.component.scss' ]
})
export class RestaurantLoungeComponent implements OnInit {
	@Output() onClickTable = new EventEmitter<TableLounge>();
	tables: Array<TableLounge>;
	constructor(private salesService: SalesService) {}

	ngOnInit() {
		this.getLoungeTables();
	}

	private getLoungeTables() {
		this.tables = this.salesService.getTablesCatalog();
	}
	clickTable(table: TableLounge) {
		this.onClickTable.emit(table);
	}
}
