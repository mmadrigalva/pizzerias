import { Component, OnInit, Input } from '@angular/core';
import { HomeCardOption } from '../view-models/home-card-option';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
	@Input() option: HomeCardOption;
	get showHeader(): boolean {
		return this.option !== undefined;
	}
	constructor(private router: Router) {}

	ngOnInit() {}
	clickPizzeriasIcon() {
		this.router.navigate([ '/home' ]);
	}
}
