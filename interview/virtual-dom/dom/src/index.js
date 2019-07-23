import { createElement, render, renderDOM } from './element';

import diff from './diff';
import patch from './patch';

let virtualDOM = createElement('ul', {
  class: 'list-group'
}, [
  createElement('li', { class: 'item' }, ['a']),
  createElement('li', { class: 'item' }, ['b']),
  createElement('p', { class: 'link', href: 'http://www.so.com/', target: '_blank' }, ['so']),
  createElement('li', { class: 'item current' }, ['c'])
])

let el = render(virtualDOM);
renderDOM(el, document.getElementById('root'));

let patches = diff(virtualDOM, virtualDOM2);
console.log(patches);
patch(el, patches);