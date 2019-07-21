import { createElement, render, renderDOM } from './element';

let virtualDOM = createElement('ul', {
  class: 'list'
},[
  createElement('li', {class: 'item'}, ['周杰伦']),
  createElement('li', {class: 'item'}, ['王力宏']),
  createElement('li', {class: 'item'}, ['林俊杰'])
]);
console.log(virtualDOM);
let el = render(virtualDOM);
renderDOM(el, document.getElementById('root'));