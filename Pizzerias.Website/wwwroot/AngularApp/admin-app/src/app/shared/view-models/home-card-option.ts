import { HomeCardOptionType } from '../enums/home-card-options.enum';

export class HomeCardOption {
	public title: string;
	public subtitle: string;
	public iconPath: string;
	public type: HomeCardOptionType;
	constructor();
	constructor(title: string, subtitle: string, iconPath: string, type: HomeCardOptionType);
	constructor(title?: string, subtitle?: string, iconPath?: string, type?: HomeCardOptionType) {
		this.title = title;
		this.subtitle = subtitle;
		this.iconPath = iconPath;
		this.type = type;
	}
}
