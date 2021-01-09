class RenderHead {
    constructor(params) {
        this.selector = params.selectorNavigation;
        this.logo = params.logo;
        this.button = params.navigationButton;
        this.navigation = params.navigation;
        this.isLogo = false;

        this.DOM = null;
        // this.baseURL = URL.baseURL();

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return;
        }

        this.render();
        this.addEvents();
    }

    isValidSelector() {
        const DOM = document.getElementById(this.selector); 
    console.log(DOM); 
    console.log(this.selector);
        if (!DOM) {
            console.log('asdaagj');
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    isValidMenuLink(menuItem) {
        return true;
    }

    generateLinks(){
        let HTML = '<div class="navigation-links">';
        for (let i = 0; i < this.navigation.length; i++) {
            const navigationItem = this.navigation[i];
            if (!this.isValidMenuLink(navigationItem)) {
                continue;
            }
            let url = navigationItem.link;
            // let url = this.baseURL + menuItem.link;
            // if (url[url.length - 1] !== '/') {
            //     url += '/';
            // }

            HTML += `<a href="${url}" ">${navigationItem.name}</a>`;
        }
        HTML += '</div>';
        return HTML;
    }
    generateNav() {
        let HTML = '';
        HTML += `<div class="navigation-btn">
                        <a href="${this.button.link}">${this.button.name}</a>
                    </div>
                </div>
                <div class="basket">
                    <div class="empty"><span></span></div>
                </div>`; 

        return HTML;
    }

    generateHiddenBuscket(){
        let HTML = `<div class="basket">
        <div class="empty"><span></span></div>
        </div>`;
        return HTML;
    }

    isValidMenu() {
        // if (!Array.isArray(this.navigation)) {
        //     return false;
        // }
        // if (this.navigation.length === 0) {
        //     return false;
        // }
        return true;
    }

    generateHTML() {
        // validation
        if (!this.isValidMenu()) {
            return '';
        }

        // output
        return `<div class="navigation">
                ${this.generateLinks()}
                ${this.generateNav()}
                </div>
                ${this.generateHiddenBuscket()}`;
    }

    generateLogo(){
        let HTML = '';
        // if(this.logo !== null){
            HTML += `<img class="toggle" src="${this.logo}" alt="logo" >`;
            console.log('fghfg');
        // }
        return HTML;
    }

    render() {
        this.DOM.innerHTML = this.generateHTML();
    }

    addEvents() {
        addEventListener('scroll', () => {
            if (scrollY > 50) {
                if(this.isLogo === false){
                    document.querySelector('.navigation-links').insertAdjacentHTML('afterbegin', this.generateLogo());
                    this.isLogo = true;
                }
                document.querySelector('.navigation').classList.add('scroll');
            } else {
                if(this.isLogo === true){
                    document.querySelector('.toggle').remove();
                    this.isLogo = false;
                }
                document.querySelector('.navigation').classList.remove('scroll');
            }
        })
    }

}

export { RenderHead };