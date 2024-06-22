import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(example, renderItems(data), data);

let uls = renderItems(data);
let info = document.getElementById('container')

uls.forEach(ul => {
    info.appendChild(ul);
});
//info.appendChild(renderItems(data));

//renderItems(data);