import { Injectable } from '@angular/core';
import { TableLounge } from '../../shared/view-models/table-lounge';
import { Category, SubCategory } from '../../shared/view-models/category';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SalesService {
	constructor() {}
	getTablesCatalog() {
		let tables = new Array<TableLounge>();
		for (var i = 0; i < 12; i++) {
			tables.push(
				new TableLounge(i + 1, `Mesa #${i + 1}`, `Mesa #${i + 1}`, '/assets/icons/sales/pizzas-table.svg')
			);
		}
		return tables;
	}

	getCategories(): Observable<Array<Category>> {
		return Observable.create((observer) => {
			var result = new Array<Category>();
			var pizzaFlavors = new Array<SubCategory>();
			pizzaFlavors.push(
				new SubCategory('Brazileña', 'Descripción Brazileña', 0),
				new SubCategory('Canadiense', 'Descripción Canadiense', 0),
				new SubCategory('Hawaiana', 'Descripción Hawaiana', 0),
				new SubCategory('Jamón y Hongos', 'Descripción Jamón y Hongos', 0),
				new SubCategory('Jamón y Queso', 'Descripción Jamón y Queso', 0),
				new SubCategory('Mexicana', 'Descripción Mexicana', 0),
				new SubCategory('Napolitana', 'Descripción Napolitana', 0),
				new SubCategory('Pollo', 'Descripción Pollo', 0),
				new SubCategory('Solo Carnes', 'Descripción Solo Carnes', 0),
				new SubCategory('Suprema', 'Descripción Suprema', 0),
				new SubCategory('Vegetariana', 'Descripción Vegetariana', 0),
				new SubCategory('Suprema Deluxe', 'Descripción Suprema Deluxe', 0)
			);
			result.push(
				new Category('Pizzas', [
					new SubCategory('Junior', '4 piezas', 2500, pizzaFlavors),
					new SubCategory('Pequeña', '6 piezas', 5000, pizzaFlavors),
					new SubCategory('Mediana', '8 piezas', 6500, pizzaFlavors),
					new SubCategory('Grande', '12 piezas', 7500, pizzaFlavors),
					new SubCategory('Extra-Grande', '16 piezas', 2500, pizzaFlavors)
				]),
				new Category('Platillos Italianos'),
				new Category('Comidas Rápidas'),
				new Category('Ensaladas'),
				new Category('Bebidas')
			);
			observer.next(result);
			observer.complete();
		});
	}
}
