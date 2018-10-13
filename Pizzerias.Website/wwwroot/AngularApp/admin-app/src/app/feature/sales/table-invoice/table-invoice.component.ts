import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TableLounge } from '../../../shared/view-models/table-lounge';

@Component({
	selector: 'table-invoice',
	templateUrl: './table-invoice.component.html',
	styleUrls: [ './table-invoice.component.scss' ]
})
export class TableInvoiceComponent implements OnInit {
	@Input() table = new TableLounge();
	@Output() onNewOrderClick = new EventEmitter<TableLounge>();
	constructor() {}

	ngOnInit() {}
	newOrderClick() {
		this.onNewOrderClick.emit(this.table);
	}
}
