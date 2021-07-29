import {Select}  from './select/select.js';
import './select/s.scss';


const select = new Select('#select',{
    placeholder : 'выбери пожалуйста текст',
    data: [
        {id : 1, value : 'Holubci'},
        {id : 2, value : 'Salo'},
        {id : 3, value : 'Borshch'},
        {id : 4, value : 'Kotleti'},
        {id : 5, value : 'Holubci'},
        {id : 6, value : 'Salo'},
        {id : 7, value : 'Borshch'},
        {id : 8, value : 'Kotleti'},
    ],
    dropup: true,


});

window.s = select;