import { RouterModule, Routes, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './feature/home/home.component';
import { SalesComponent } from './feature/sales/sales.component';
const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'sales',
		component: SalesComponent
	}
];
@NgModule({
	imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
