import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HomeCardOption } from '../../../shared/view-models/home-card-option';

@Component({
	selector: 'home-card',
	templateUrl: './home-card.component.html',
	styleUrls: [ './home-card.component.scss' ]
})
export class HomeCardComponent implements OnInit {
	@Input() option: HomeCardOption;
	@Output() onClickOption = new EventEmitter<HomeCardOption>();

	get hasSubtitle(): boolean {
		return this.option !== undefined && this.option.subtitle !== undefined && this.option.subtitle !== '';
	}

	constructor() {}
	ngOnInit() {}

	clickOption() {
		this.onClickOption.emit(this.option);
	}
}
