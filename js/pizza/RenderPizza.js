class RenderPizza {
    constructor(params){
        this.selector = params.selector;
        this.items = params.items;
        
        this.DOM = null;
        this.init();
    }
    
    init(){
        if(!this.isValidSelector()){
            return;
        }
        this.generateHTML();
    }

    isValidSelector(){
        const DOM = document.querySelector(this.selector);
        console.log(DOM);
        if (!DOM) {
            console.log('asdaa');
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    generateHTML(){
        let HTML ='';
        for(let i = 0; i < this.items.length; i++ ){
            let pizza = this.items[i];
        HTML  += ` <div class="item col-3">
                        <div class="item-img">
                            <img src="${pizza.photoPath}" alt="${pizza.alt}">
                        </div>
                        <div class="item-description">
                            <h2 class="item-name">${pizza.title}</h2>
                            <p class="item-ingredients">${pizza.description}</p>
                        </div>
                        <div class="price-select">
                            <p class="price">${pizza.price}</p>
                            <a href="#" class="select">${pizza.button}</a>
                        </div>
                    </div>`;
        }
        
        this.DOM.insertAdjacentHTML('beforeend', HTML);
    }

}
export{RenderPizza}