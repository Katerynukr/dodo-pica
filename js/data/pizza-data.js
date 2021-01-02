const pizzaData = {
    selector: '#pizza',
    head: 'Picos',
    items: [
    {
        photoPath: './img/pizzas/christmas-pizza.jpg',
        title: 'Christmas Pizza',
        alt: 'Christmas Pizza',
        description: 'Kalakutiena, spanguolių padažas, bruknės, šoninė, raudonieji svogūnai, mocarelos sūris, česnakinis padažas',
        price: 'nuo 8,75 €',
        button: 'Pasirinkti'
    },
    {
        photoPath: './img/pizzas/carbonara.jpg',
        title: 'Carbonara',
        alt: 'Carbonara',
        description: 'Sūrio padažas, granuliuoti česnakai, mocarelos sūris, raudonieji svogūnai, šoninė, vyšniniai pomidorai, itališkos žolelės, parmezanas, čederio sūris',
        price: 'nuo 8,75 €',
        button: 'Pasirinkti'
    },
    {
        photoPath: './img/pizzas/pesto.jpg',
        title: 'Pesto',
        alt: 'Pesto',
        description: 'Vištiena, fetos sūris, vyšniniai pomidorai, mocarelos sūris, padažas pesto, česnakinis padažas',
        price: 'nuo 8,75 €',
        button: 'Pasirinkti'
    },
    {
        photoPath: './img/pizzas/half&half.jpg',
        title: 'Half&Half',
        alt: 'Half&Half',
        description: '',
        price: 'nuo 11,70 €',
        button: 'Sukurti'
    },
    {
        photoPath: './img/pizzas/fiesta.jpg',
        title: 'Fiesta',
        alt: 'Fiesta',
        description: 'Vištiena, mocarelos sūris, raudonieji svogūnai, saliamis, pomidorai, žalioji paprika, česnakinis padažas, chipotle padažas, granuliuoti česnakai',
        price: 'nuo 8,75 €',
        button: 'Pasirinkti'
    },
    {
        photoPath: './img/pizzas/cheesy-chiken.jpg',
        title: 'Cheesy Chicken',
        alt: 'Cheesy Chicken',
        description: 'Pomidorai, mocarelos sūris, vištiena, sūrio padažas',
        price: 'nuo 7,75 €',
        button: 'Pasirinkti'
    },
    {
        photoPath: './img/pizzas/crazy.jpg',
        title: 'Crazy 🌶️',
        alt: 'Crazy',
        description: 'Saldžiarūgštis padažas, vištiena, mocarelos sūris, saliamis, picų padažas',
        price: 'nuo 8,75 €',
        button: 'Pasirinkti'
    },
    {
        photoPath: './img/pizzas/royal.jpg',
        title: 'Royal 🌶️',
        alt: 'Royal',
        description: 'Pievagrybiai, čili padažas, picų padažas, raudonieji svogūnai, vištiena, jautiena, kumpis, mocarelos sūris',
        price: 'nuo 8,75 €',
        button: 'Pasirinkti'
    },
    {
        photoPath: './img/pizzas/4-seasons.jpg',
        title: '4 seasons',
        alt: '4 seasons',
        description: 'Pievagrybiai, pomidorai, mocarelos sūris, kumpis, saliamis, picų padažas, fetos sūris, itališkos žolelės',
        price: 'nuo 7,75 €',
        button: 'Pasirinkti'
    },
    {
        photoPath: './img/pizzas/dodo.jpg',
        title: 'Dodo',
        alt: 'Dodo',
        description: 'Pievagrybiai, pomidorai, mocarelos sūris, kumpis, saliamis, žalioji paprika, picų padažas',
        price: 'nuo 7,75 €',
        button: 'Pasirinkti'
    },
    {
        photoPath: './img/pizzas/chiken-bbq.jpg',
        title: 'Chicken BBQ',
        alt: 'Chicken BBQ',
        description: 'Mocarelos sūris, šoninė, vištiena, raudonieji svogūnai, picų padažas, bbq padažas',
        price: 'nuo 7,75 €',
        button: 'Pasirinkti'
    },
    {
        photoPath: './img/pizzas/mexican.jpg',
        title: 'Mexican 🌶️',
        alt: 'Mexican',
        description: 'Pievagrybiai, picų padažas, jalapeno griežinėliai, žalioji paprika, vištiena, saliamis, mocarelos sūris, pomidorai',
        price: 'nuo 8,75 €',
        button: 'Pasirinkti'
    },
    {
        photoPath: './img/pizzas/pepperoni.jpg',
        title: 'Pepperoni 🌶️',
        alt: 'Pepperoni',
        description: 'Picų padažas, mocarelos sūris, saliamis',
        price: 'nuo 8,75 €',
        button: 'Pasirinkti'
    },
    {
        photoPath: './img/pizzas/champion.jpg',
        title: 'Champion',
        alt: 'Champion',
        description: 'Pievagrybiai, mocarelos sūris, kumpis, picų padažas',
        price: 'nuo 6,75 €',
        button: 'Pasirinkti'
    },
    {
        photoPath: './img/pizzas/ranch.jpg',
        title: 'Ranch',
        alt: 'Ranch',
        description: 'Česnakinis padažas, pomidorai, mocarelos sūris, kumpis, vištiena, granuliuoti česnakai',
        price: 'nuo 8,75 €',
        button: 'Pasirinkti'
    },
    {
        photoPath: './img/pizzas/cheeseburger.jpg',
        title: 'Cheeseburger',
        alt: 'Cheeseburger',
        description: 'Mocarelos sūris, pomidorai, šoninė, jautiena, raudonieji svogūnai, marinuoti agurkai, picų padažas',
        price: 'nuo 7,75 €',
        button: 'Pasirinkti'
    },
    {
        photoPath: './img/pizzas/havaiian.jpg',
        title: 'Hawaiian',
        alt: 'Hawaiian',
        description: 'Picų padažas, ananasai, mocarelos sūris, kumpis',
        price: 'nuo 7,75 €',
        button: 'Pasirinkti'
    },
    {
        photoPath: './img/pizzas/spicy.jpg',
        title: 'Spicy 🌶️',
        alt: 'Spicy',
        description: 'Mocarelos sūris, čili padažas, jalapeno griežinėliai, saliamis, picų padažas, medžiotojų dešrelės',
        price: 'nuo 7,75 €',
        button: 'Pasirinkti'
    },
    {
        photoPath: './img/pizzas/margherita.jpg',
        title: 'Margherita 🌱',
        alt: 'Margherita',
        description: 'Picų padažas, mocarelos sūris, pomidorai, itališkos žolelės',
        price: 'nuo 6,75 €',
        button: 'Pasirinkti'
    },
    {
        photoPath: './img/pizzas/seafood.jpg',
        title: 'Seafood',
        alt: 'Seafood',
        description: 'Mocarelos sūris, šoninė, vištiena, krevetės, picų padažas',
        price: 'nuo 8,75 €',
        button: 'Pasirinkti'
    },
    {
        photoPath: './img/pizzas/the-meats.jpg',
        title: 'The Meats 🌶️',
        alt: 'The Meats',
        description: 'Medžiotojų dešrelės, mocarelos sūris, šoninė, kumpis, jautiena, picų padažas',
        price: 'nuo 7,75 €',
        button: 'Pasirinkti'
    },
    {
        photoPath: './img/pizzas/vegetarian.jpg',
        title: 'Vegetarian 🌱',
        alt: 'Vegetarian',
        description: 'Pievagrybiai, fetos sūris, picų padažas, marinuoti agurkai, juodosios alyvuogės, žalioji paprika, raudonieji svogūnai, mocarelos sūris, pomidorai, itališkos žolelės',
        price: 'nuo 7,75 €',
        button: 'Pasirinkti'
    },
    {
        photoPath: './img/pizzas/cheese.jpg',
        title: 'Cheese 🌱',
        alt: 'Cheese',
        description: 'Mocarelos sūris, picų padažas, fetos suгis, itališkos žolelės',
        price: 'nuo 6,75 €',
        button: 'Pasirinkti'
    },
    {
        photoPath: './img/pizzas/picos-pyragas.jpg',
        title: 'Picos pyragas 🌱',
        alt: 'Picos pyragas',
        description: 'Bruknės, ananasai, sutirštintas pienas',
        price: 'nuo 6,75 €',
        button: 'Pasirinkti'
    },
]
}

export { pizzaData }