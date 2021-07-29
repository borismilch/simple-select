function getTemplate(data =[], placeholder){
    console.log(data);
    const items = data.map(item =>{
       return`<div class="select__item" data-type="item" data-id ="${item.id}">${item.value}</div>`
    })
   let text = placeholder ?? 'select'
    let template =  `
    <div class ="select__backdrop" data-type="backdrop"></div>
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
        this.selectedId = null;
        this.#render();
        this.#setup();
    }
    #render(){
        console.log(this.options);
        const {placeholder, data, dropup} = this.options;
        this.$el.classList.add('select');
        this.$el.innerHTML = getTemplate(data, placeholder);
        if(dropup){
            this.$el.style.flexDirection = 'column-reverse'
        }
        
    }
    #setup(){
        this.clickHandler = this.clickHandler.bind(this)
        this.$el.addEventListener('click', this.clickHandler)
        this.$value = this.$el.querySelector('[data-type = "input"]')
    }

    clickHandler(event){
        const {type} = event.target.dataset;
        console.log(type)
        if(type == 'input'){
            this.toggle()
        }
        if(type === 'item'){
            const id = event.target.dataset.id;
            console.log(id);
            this.select(id);
            this.close();
        }
        if(type == 'backdrop'){
            this.close()
        }
        
    }
    open(){
        this.$el.classList.toggle('open')
    };
    get isOpen(){
        this.$el.classList.contains('open')
    }
    get current(){
        return this.options.data.find(item => item.id == this.selectedId )
    }
    select(id){
        this.selectedId = id;
        this.$el.querySelectorAll('[data-id]').forEach(element => {
            element.classList.remove('selected')
        });
       this.$el.querySelector(`[data-id = "${this.selectedId}"]`).classList.add('selected');

        this.$value.textContent = this.current.value;
    }
    toggle(){
        this.isOpen ? this.close() : this.open();
    }
    close(){
        this.$el.classList.remove('open')
    };
    destroy(){
        this.$el.removeEventListener('click', this.clickHandler);
        this.$el.innerHTML = ''
    }
};