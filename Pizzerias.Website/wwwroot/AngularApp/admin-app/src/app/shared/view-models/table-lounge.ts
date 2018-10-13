export class TableLounge {
	public id: number;
	public name: string;
	public description: string;
	public iconPath: string;
	constructor();
	constructor(id: number, name: string, description: string, iconPath: string);
	constructor(id?: number, name?: string, description?: string, iconPath?: string) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.iconPath = iconPath;
	}
}
