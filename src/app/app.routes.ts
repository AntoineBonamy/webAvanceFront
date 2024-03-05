import { Routes } from '@angular/router';
import { HomePageComponent } from './01.pages/home-page/home-page.component';
import { BasketPageComponent } from './01.pages/basket-page/basket-page.component';
import { CheckoutPageComponent } from './01.pages/checkout-page/checkout-page.component';

export const routes: Routes = [{
    path: "", component: HomePageComponent
},
{
    path: "basket", component: BasketPageComponent
},
{
    path: "checkout", component: CheckoutPageComponent
}
];
