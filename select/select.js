function getTemplate(data =[], placeholder){
    console.log(data);
    const items = data.map(item =>{
       return`<div class="select__item" data-type="item" data-id ="${item.id}">${item.value}</div>`
    })
   let text = placeholder ?? 'select'
    let template =  `
    <div class="select__input" data-type="input">${text}</div>
    <div class="select__dropdown">
      ${items.join('')}
    </div>`
    
    return template
}

export class Select{
    constructor(selector, options){
       this.options = options;
        this.$el = document.querySelector(selector);
        this.#render();
        this.#setup();
    }
    #render(){
        console.log(this.options);
        const {placeholder, data} = this.options;
        this.$el.classList.add('select');
        this.$el.innerHTML = getTemplate(data, placeholder);

    }
    #setup(){
        this.clickHandler = this.clickHandler.bind(this)
        this.$el.addEventListener('click', this.clickHandler )}

    clickHandler(event){
        const {type} = event.target.dataset;
        console.log(type)
        if(type == 'input'){
            this.toggle()
        }
        if(type === 'item'){
            const id = event.target.dataset.id;
            const text = event.target.textContent;
            console.log(id);
            this.$el.querySelector('[data-type ="input"]').textContent = text;
            this.close();
        }
    }
    open(){
        this.$el.classList.toggle('open')
    };
    get isOpen(){
        this.$el.classList.contains('open')
    }
    toggle(){
        this.isOpen ? this.close() : this.open();
    }
    close(){
        this.$el.classList.remove('open')
    };
    destroy(){
        this.$el.removeEventListenr('click', this.clickHandler);
    }
};