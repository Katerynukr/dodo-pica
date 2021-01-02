// pizza import
import {RenderPizza} from './pizza/RenderPizza.js';
import { pizzaData } from './data/pizza-data.js';
// desserts import
import {RenderDesserts} from './desserts/RenderDesserts.js';
import {dessertsData} from './data/desserts-data.js';
//pizza 
new RenderPizza(pizzaData);
//desserts
new RenderDesserts(dessertsData);