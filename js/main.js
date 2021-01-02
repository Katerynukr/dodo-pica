// pizza import
import {RenderPizza} from './pizza/RenderPizza.js';
import { pizzaData } from './data/pizza-data.js';
// appetizers import
import {RenderAppetizers} from './appetizers/RenderAppetizers.js';
import {appetizersData} from './data/appetizers-data.js';
// desserts import
import {RenderDesserts} from './desserts/RenderDesserts.js';
import {dessertsData} from './data/desserts-data.js';
//drinks import
import {RenderDrinks} from './drinks/RenderDrinks.js';
import {drinksData} from './data/drinks-data.js'
//pizza 
new RenderPizza(pizzaData);
// appetizers
new RenderAppetizers(appetizersData);
//desserts
new RenderDesserts(dessertsData);
//drinks
new RenderDrinks(drinksData);