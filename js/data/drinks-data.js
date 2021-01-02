const drinksData = {
    selector: '#drinks',
    head: 'Gėrimai',
    items: [
    {
        imgPath: './img/drinks/coca-cola-1.jpg',
        title: 'Coca-Cola',
        description: '1 l',
        price: '2,50 €',
        button: 'Į krepšelį'
    },

    {
        imgPath: './img/drinks/coca-cola-zero.jpg',
        title: 'Coca-Cola Zero',
        description: '0,5 l',
        price: '1,50 €',
        button: 'Į krepšelį'
    },

    {
        imgPath: './img/drinks/coca-cola-0.5.jpg',
        title: 'Coca-Cola',
        description: '0,5 l',
        price: '1,50 €',
        button: 'Į krepšelį'
    },

    {
        imgPath: './img/drinks/fanta.jpg',
        title: 'Fanta',
        description: '0,5 l',
        price: '1,50 €',
        button: 'Į krepšelį'
    },

    {
        imgPath: './img/drinks/sprite.jpg',
        title: 'Sprite',
        description: '0,5 l',
        price: '1,50 €',
        button: 'Į krepšelį'
    },

    {
        imgPath: './img/drinks/negazuotas-vanduo.jpg',
        title: 'Negazuotas vanduo',
        description: '0,5 l',
        price: '1,30 €',
        button: 'Į krepšelį'
    },

    {
        imgPath: './img/drinks/gazuotas-vanduo.jpg',
        title: 'Gazuotas vanduo',
        description: '',
        price: '1,30 €',
        button: 'Į krepšelį'
    },

    {
        imgPath: './img/drinks/pienas.jpg',
        title: 'Pienas MARGĖ, 3,2%, UAT',
        description: '3,2% riebumo pienas, 1 L Apdorotas ultraaukšta temperatūra (UAT), 1 l',
        price: '1,20 €',
        button: 'Į krepšelį'
    },

    {
        imgPath: './img/drinks/cido-ivairiu-vaisiu-1.jpg',
        title: 'Įvairių vaisių gėrimas CIDO',
        description: '1 l',
        price: '2,50 €',
        button: 'Į krepšelį'
    },

    {
        imgPath: './img/drinks/cido-apelsinu-1.jpg',
        title: 'Apelsinų sultys CIDO 100%',
        description: '1 l',
        price: '2,50 €',
        button: 'Į krepšelį'
    },

    {
        imgPath: './img/drinks/cido-obuoliu-1.jpg',
        title: 'Obuolių sultys CIDO 100%',
        description: '1 l',
        price: '2,50 €',
        button: 'Į krepšelį'
    },

    {
        imgPath: './img/drinks/cido-pomidoru-1.jpg',
        title: 'Pomidorų sultys CIDO 100%',
        description: '1 l',
        price: '2,50 €',
        button: 'Į krepšelį'
    },

    {
        imgPath: './img/drinks/cido-apelsinu-0.3.jpg',
        title: 'Apelsinų sultys CIDO (100%)',
        description: '0,3 l',
        price: '1,50 €',
        button: 'Į krepšelį'
    },

    {
        imgPath: './img/drinks/cido-obuoliu-0.3.jpg',
        title: 'Obuolių sultys CIDO (100%)',
        description: '0,3 l',
        price: '1,50 €',
        button: 'Į krepšelį'
    },

    {
        imgPath: './img/drinks/cido-pomidoru-0.3.jpg',
        title: 'Pomidorų sultys CIDO (100%)',
        description: '0,3 l',
        price: '1,50 €',
        button: 'Į krepšelį'
    },

    {
        imgPath: './img/drinks/frutto-ivairiu-vaisiu.png',
        title: 'Įvairių vaisių gėrimas FRUTTO',
        description: '0,5 l',
        price: '1,30 €',
        button: 'Į krepšelį'
    },

    {
        imgPath: './img/drinks/vasaros-uogu-frutto.png',
        title: 'Vasaros uogų sulčių gėrimas FRUTTO',
        description: '0,5 l',
        price: '1,30 €',
        button: 'Į krepšelį'
    },

    {
        imgPath: './img/drinks/cido-ivairiu-vaisiu.png',
        title: 'Įvairių vaisių gėrimas CIDO',
        description: '0,2 l',
        price: '0,60 €',
        button: 'Į krepšelį'
    },

    {
        imgPath: './img/drinks/fuzetea-lemon.jpg',
        title: 'Fuzetea Lemon',
        description: '0,5 l',
        price: '1,50 €',
        button: 'Į krepšelį'
    },

    {
        imgPath: './img/drinks/fuzetea-peach.jpg',
        title: 'Fuzetea Peach',
        description: '0,5 l',
        price: '1,50 €',
        button: 'Į krepšelį'
    },

    {
        imgPath: './img/drinks/fuzetea-green-citrus.jpg',
        title: 'Fuzetea Green Citrus',
        description: 'Šalta žalia arbata su citrina., 0,5 l',
        price: '1,50 €',
        button: 'Į krepšelį'
    },

    {
        imgPath: './img/drinks/nealkoholinis-baltas-alus.jpg',
        title: 'Nealkoholinis kvietinis BALTAS alus',
        description: 'Nealkoholinis kvietinis BALTAS alus, 0,5 l',
        price: '2,00 €',
        button: 'Į krepšelį'
    },

    {
        imgPath: './img/drinks/nealkoholinis-alus-pilsner.jpg',
        title: 'Nealkoholinis šviesusis alus PILSNER',
        description: 'Nealkoholinis šviesusis alus PILSNER, 0,5 l',
        price: '2,00 €',
        button: 'Į krepšelį'
    },
    
    {
        imgPath: './img/drinks/nealkoholinis-radler.jpg',
        title: 'Nealkoholinis kokteilis RADLER',
        description: '0,5 l',
        price: '2,00 €',
        button: 'Į krepšelį'
    },

    {
        imgPath: './img/drinks/red-bull.jpg',
        title: 'Energinis gėrimas RED BULL',
        description: '0,25 l',
        price: '2,50 €',
        button: 'Į krepšelį'
    }
]
}

export { drinksData}