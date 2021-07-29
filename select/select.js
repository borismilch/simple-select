function getTemplate(options){
    let id = 0;
    let template =  `
    <div class="select__input">Select food</div>
    <div class="select__dropdown">
       <div class="select__item">food salo1</div>
       <div class="select__item">food salo2</div>
       <div class="select__item">food salo3</div>
       <div class="select__item">food salo4</div>
       <div class="select__item">food salo5</div>
       <div class="select__item">food salo6</div>
    </div>`
    return template
}

export class Select{
    constructor(selector, options){
        this.$el = document.querySelector(selector);
        this.#render();
        this.#setup();
    }
    #render(){
        this.$el.classList.add('select')
        this.$el.innerHTML = getTemplate();

    }
    #setup(){
        this.clickHandler = this.clickHandler.bind(this)
        this.$el.addEventListener('click', this.clickHandler )}

    clickHandler(event){

    }
    open(){
        this.$el.classList.toggle('open')
    };
    close(){
        this.$el.classList.remove('open')
    };
    destroy(){
        this.$el.removeEventListenr('click', this.clickHandler);
    }
};