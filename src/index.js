import _ from 'lodash';
import printMe from './print.js';
import { player } from './player.js';
import './style.css';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click & check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    element.appendChild(document.createElement('br'));
    element.appendChild(player);

    return element;
}

document.body.appendChild(component());