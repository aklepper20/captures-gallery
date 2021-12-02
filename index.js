import DoubleLinkedList from './dll.js';
import images from './images.js';


const viewer = document.getElementById('viewer');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

const list = new DoubleLinkedList();
console.log(list);

images.forEach((image) => list.push(image));
console.log(list);