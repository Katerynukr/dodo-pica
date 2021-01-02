class RenderDrinks {
    constructor(params){
        this.selector = params.selector;
        this.header = params.head;
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
        HTML += `<h2 class="section-header col-12">${this.header}</h2>`;
        for(let i = 0; i < this.items.length; i++ ){
            let drink = this.items[i];
        HTML  += ` <div class="item col-3">
                        <div class="item-img">
                            <img src="${drink.imgPath}" alt="${drink.alt}">
                        </div>
                        <div class="item-description">
                            <h2 class="item-name">${drink.title}</h2>
                            <p class="item-ingredients">${drink.description}</p>
                        </div>
                        <div class="price-select">
                            <p class="price">${drink.price}</p>
                            <a href="#" class="select">${drink.button}</a>
                        </div>
                    </div>`;
        }
        
        this.DOM.insertAdjacentHTML('beforeend', HTML);
    }

}
export{RenderDrinks}