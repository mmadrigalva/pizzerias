export class Category {
	public name: string;
	public subCategories: Array<SubCategory>;
	constructor();
	constructor(name: string);
	constructor(name: string, subCategories: Array<SubCategory>);
	constructor(name?: string, subCategories?: Array<SubCategory>) {
		this.name = name;
		this.subCategories = subCategories;
	}
}

export class SubCategory {
	public name: string;
	public description: string;
	public price: number;
	public subCategories: Array<SubCategory>;
	constructor();
	constructor(name: string, description: string, price: number);
	constructor(name: string, description: string, price: number, subCategories: Array<SubCategory>);
	constructor(name?: string, description?: string, price?: number, subCategories?: Array<SubCategory>) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.subCategories = subCategories;
	}
}
