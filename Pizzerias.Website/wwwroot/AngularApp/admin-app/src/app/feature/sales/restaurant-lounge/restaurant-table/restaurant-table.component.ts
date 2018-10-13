import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableLounge } from '../../../../shared/view-models/table-lounge';

@Component({
	selector: 'restaurant-table',
	templateUrl: './restaurant-table.component.html',
	styleUrls: [ './restaurant-table.component.scss' ]
})
export class RestaurantTableComponent implements OnInit {
	@Input() table: TableLounge;
	@Output() onClickTable = new EventEmitter<TableLounge>();
	get hasDescription(): boolean {
		return this.table !== undefined && this.table.description !== undefined && this.table.description !== '';
	}
	constructor() {}

	ngOnInit() {}
	clickTable() {
		this.onClickTable.emit(this.table);
	}
}
